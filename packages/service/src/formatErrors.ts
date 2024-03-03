import { MercuriusCommonOptions } from "mercurius"

const formatErrors: MercuriusCommonOptions["errorFormatter"] = (
  execution,
  context
) => {
  console.log("fastify handler", execution.errors[0].originalError)
  return {
    statusCode: 500,
    response: execution,
  }
}

export default formatErrors
