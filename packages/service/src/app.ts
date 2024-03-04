import "reflect-metadata"

import fastify, { FastifyInstance } from "fastify"

import mercurius from "mercurius"
import buildContext from "./buildContext"
import formatErrors from "./formatErrors"
import getSchema from "./getSchema"

const build = (opts = {}): FastifyInstance => {
  const app = fastify(opts)
  void getSchema().then(schema => {
    return app.register(mercurius, {
      schema,
      graphiql: true,
      errorFormatter: formatErrors,
      context: buildContext,
    })
  })

  return app
}

export default build
