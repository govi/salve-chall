import { parse } from "csv-parse/sync"
import { promises as fs } from "fs"
import { AST, Column, ColumnRef, Expr, Parser, Select } from "node-sql-parser"

export interface CSVClientOptions {
  tenantType: string
  tenantIdFieldName: string
}

export interface QueryResult {
  fieldNames: string[]
  fieldTypes: string[]
  rows: any[]
  count: number
}

export type SupportedFieldTypes = "Int" | "Float" | "String" | "DateTime"

const toSupportedFieldType = (value: unknown) => {
  if (typeof value === "number")
    return Number.isInteger(value) ? "Int" : "Float"
  if (typeof value === "string")
    return value.includes("-") ? "DateTime" : "String"
  if (typeof value === "boolean") return "Int"
  throw new Error(`Unsupported field type ${value}`)
}

const sanitiseName = (str: string) =>
  str.split(".").pop()?.replace("`", "") ?? ""

const searchForParameterisedField = (
  ex: Expr,
  params: any[],
  index: number
) => {
  const l = ex.left
  const r = ex.right
  if (l?.type === "column_ref" && r?.type === "origin" && r.value === "?") {
    return [(l as ColumnRef).column, params[index]]
  }
}

const checkASTValid = (ast: AST) => {
  if (ast.type !== "select")
    throw new Error("Only select statements are supported")
  if (!ast.from || ast.from?.length > 1)
    throw new Error("Only one table is supported")
  if (!ast.from[0].table) throw new Error("No table specified")
  const w = ast.where
  if (w?.type !== "binary_expr") throw new Error("No where clause specified")
  return true
}

const parser = new Parser()
class CSVClient {
  private readonly _options: CSVClientOptions

  constructor(options: CSVClientOptions) {
    this._options = options
  }

  private _resolveTableName(table: string, tenantId?: number): string {
    const tName = sanitiseName(table)
    if (this._options.tenantType === tName) return tName
    if (!tenantId) throw new Error("tenantId is required")
    return `${tName}-${tenantId}`
  }

  async query<T>(
    table: string,
    fields?: string[],
    filters?: Record<string, any>
  ): Promise<{
    items: T[]
    fields?: { name: string; type: SupportedFieldTypes }[]
  }> {
    const content = await fs.readFile(
      `${__dirname}/../data/${this._resolveTableName(
        table,
        filters?.[this._options.tenantIdFieldName]
      )}.csv`
    )
    const items = parse(content)
    const headers: string[] = items.shift()
    const fieldInfo: Record<
      string,
      { name: string; type: SupportedFieldTypes }
    > = {}
    const respItems = items.map((item: string[]) => {
      return headers.reduce((acc, field, index) => {
        if (fields && fields.length > 0 && !fields.includes(field)) return acc
        acc[field] = item[index]
        const fInfo = fieldInfo[field] ?? {}
        fInfo.name = field
        fInfo.type = toSupportedFieldType(item[index])
        if (fInfo.type === "DateTime")
          acc[field] = new Date(acc[field]).toISOString()
        fieldInfo[field] = fInfo
        return acc
      }, {} as Record<string, any>) as T
    })

    const respFields = fields?.map(z => fieldInfo[z])

    return {
      items: respItems,
      fields: respFields,
    }
  }

  // only here as we are taking a lazy approach to finding the partitionid
  // i mean, we could have stored it in a nosql database, but the access approach would
  // be different. We are currently pretending to be an SQL db, so we will just use
  // this hack here to determine the tenant idf
  findTenantId = (s: Select, params: any[]) => {
    const where = s.where
    // ultra rudimentary ast picker
    if (typeof where === "object") {
      const w = where as Expr
      let counter = 0
      return [w.left as Expr, w.right as Expr]
        .map(z => {
          if (!z) return
          const info = searchForParameterisedField(z, params, counter)
          if (info) {
            counter++
            if (info[0] === this._options.tenantIdFieldName) {
              return info[1]
            }
          }
        })
        .find(z => !!z)
    }
  }

  async queryWithSQL(sql: string, params?: any[]): Promise<QueryResult> {
    const result = parser.astify(sql) as AST
    checkASTValid(result)
    const fields = (result as Select).columns.map(z => {
      if (typeof z === "string") return sanitiseName(z)
      return sanitiseName(((z as Column).expr as ColumnRef).column)
    })
    const table = (result as Select).from?.[0].table
    const tenantId = this.findTenantId(result as Select, params ?? [])
    const r = await this.query(table, fields, {
      [this._options.tenantIdFieldName]: tenantId,
    })
    return {
      fieldNames: r.fields?.map(z => z.name) ?? [],
      fieldTypes: r.fields?.map(z => z.type) ?? [],
      rows: r.items,
      count: r.items.length,
    }
  }
}

export default CSVClient
