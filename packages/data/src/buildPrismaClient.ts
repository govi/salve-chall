import { PrismaClient } from "@prisma/client"
import { PrismaCSV } from "@salve-chall/prisma-csv-driver"
import { CSVClient } from "../../sql4csv"

const csvClient = new CSVClient({
  tenantIdFieldName: "clinic_id",
  tenantType: "clinics",
})
const adapter = new PrismaCSV(csvClient)
const p = new PrismaClient({
  adapter,
  log: [
    {
      emit: "event",
      level: "query",
    },
    "info",
    "warn",
    "error",
  ],
})

p.$on("query", e => {
  console.log(`Query: ${e.query}`)
  console.log(`Duration: ${e.duration}ms`)
})

const buildPrismaClient = () => {
  const c = p.$extends({
    name: "perReqDefaultParams",
    query: {
      $allModels: {
        $allOperations({ model, operation, args, query }) {
          if (!operation.startsWith("find"))
            throw new Error("Only find operations are allowed")
          return query(args)
        },
      },
    },
  })
  return c
}

export default buildPrismaClient
