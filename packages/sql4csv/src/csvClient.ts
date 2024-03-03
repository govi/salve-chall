import { parse } from "csv-parse/sync"
import { promises as fs } from "fs"
import { AST, Column, ColumnRef, Parser } from "node-sql-parser"

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

export type SupportedFieldTypes = "Int" | "Float" | "string" | "DateTime"

const toSupportedFieldType = (value: unknown) => {
  if (typeof value === "number")
    return Number.isInteger(value) ? "Int" : "Float"
  if (typeof value === "string")
    return Date.parse(value) !== Number.NaN ? "DateTime" : "string"
  if (typeof value === "boolean") return "Int"
  if (value instanceof Date) return "DateTime"
  throw new Error(`Unsupported field type ${value}`)
}

const parser = new Parser()
class CSVClient {
  private readonly _options: CSVClientOptions

  constructor(options: CSVClientOptions) {
    this._options = options
  }

  private _resolveTableName(table: string, tenantId?: number): string {
    if (this._options.tenantType === table) return table
    if (!tenantId) throw new Error("tenantId is required")
    return `${table}-${tenantId}`
  }

  async query<T>(
    table: string,
    fields?: string[],
    filters?: Record<string, any>
  ): Promise<T[]> {
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
    return items.map((item: string[]) => {
      return headers.reduce((acc, field, index) => {
        if (fields && fields.length > 0 && !fields.includes(field)) return acc
        acc[field] = item[index]
        const fInfo = fieldInfo[field] ?? {}
        fInfo.name = field
        fInfo.type = toSupportedFieldType(item[index])
        return acc
      }, {} as Record<string, any>) as T
    })
  }

  async queryWithSQL(sql: string, params?: any[]): Promise<QueryResult> {
    const result = parser.astify(sql) as AST
    if (result.type !== "select")
      throw new Error("Only select statements are supported")
    const fields = result.columns.map(z => {
      if (typeof z === "string") return z
      return ((z as Column).expr as ColumnRef).column
    })
    if (!result.from || result.from?.length > 1)
      throw new Error("Only one table is supported")
    if (!result.from[0].table) throw new Error("No table specified")
    const table = result.from[0].table
    const w = result.where
    if (w?.type !== "binary_expr") throw new Error("No where clause specified")
    const r = await this.query<Record<string, any>>(table, fields)
    return {
      fieldNames: fields,
      fieldTypes: fields.map(() => "string"),
      rows: r,
      count: r.length,
    }
  }
}

export default CSVClient
