import type {
  ColumnType,
  Query,
  Queryable,
  Result,
  ResultSet,
} from "@prisma/driver-adapter-utils"
import { ColumnTypeEnum, Debug, err, ok } from "@prisma/driver-adapter-utils"
import {
  CSVClient,
  QueryResult,
  SupportedFieldTypes,
} from "@salve-chall/sql4csv"

const log = Debug("prisma:driver-adapter:csv")

const fieldTypeToColumnType = (fType: SupportedFieldTypes) => {
  if (fType === "Int") {
    return ColumnTypeEnum.Int32
  } else if (fType === "string") {
    return ColumnTypeEnum.Text
  } else if (fType === "DateTime") {
    return ColumnTypeEnum.DateTime
  } else if (fType === "Float") {
    return ColumnTypeEnum.Float
  }
  throw new Error(`Unsupported field type ${fType}`)
}

/**
 * Base class for http client, ws client and ws transaction
 */
class CSVQueryable implements Queryable {
  readonly provider = "mysql"

  constructor(protected client: CSVClient) {}

  async queryRaw(query: Query): Promise<Result<ResultSet>> {
    log(`[js::query_raw] %O`, query)

    const res = await this.performIO(query)

    if (!res.ok) {
      return err(res.error)
    }

    const { fieldNames, fieldTypes, rows } = res.value
    let columnTypes: ColumnType[] = fieldTypes.map(type =>
      fieldTypeToColumnType(type as SupportedFieldTypes)
    )

    return ok({
      columnNames: fieldNames,
      columnTypes,
      rows,
    })
  }

  async executeRaw(query: Query): Promise<Result<number>> {
    const tag = "[js::execute_raw]"
    log(`[js::execute_raw] %O`, query)

    return (await this.performIO(query)).map(r => r.count ?? 0)
  }

  async performIO(query: Query): Promise<Result<QueryResult>> {
    const { sql, args: values } = query

    try {
      return ok(await this.client.queryWithSQL(sql, values))
    } catch (error) {
      const e = error as Error
      log("Error in performIO: %O", e)
      if (e) {
        return err({
          kind: "Mysql",
          message: e.message,
          code: 0,
          state: "error",
        })
      }
      throw e
    }
  }
}
