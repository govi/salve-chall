import { buildPrismaClient } from "@salve-chall/data"
import { FastifyRequest } from "fastify"

const buildContext = async (
  request: FastifyRequest
): Promise<{ prisma: any }> => {
  return {
    prisma: buildPrismaClient(),
  }
}

export default buildContext
