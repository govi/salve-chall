// Import the framework and instantiate it
import cors from "@fastify/cors"
import app from "./src/app"

const fastify = app({
  logger: true,
})

// Run the server!
try {
  fastify
    .register(cors, {
      origin: ["http://localhost:3000", "http://localhost:3001"],
    })
    .then(() => fastify.listen({ port: 3000 }))
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
