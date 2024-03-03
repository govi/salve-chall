import { resolvers } from "@salve-chall/data"
import "reflect-metadata"
import { buildSchema } from "type-graphql"

const getSchema = async () =>
  buildSchema({
    resolvers,
    validate: false,
  })

export default getSchema
