# Code Challenge

## Requirements

- Node 18 (18.17.0)

## Notes

This is a mono repo with some basic setup for Jest and ESLint/Prettier. I am using Prisma + type-graphql to generate a decent scaffolding with a basic schema (see `./packages/data`). Since this is using magic sauce, I have built a rudimentary csv driver for Prisma's mysql client. As Prisma queries using SQL, i am converting the SQL -> AST and using it to retrieve some basic information to service the query.

The service exposes graphql and there is also a graphiql playground at `http://localhost:3000/graphiql`. The web app is a plain react app that fetches data from this graphql service.

### What next?

1. The CSV driver is pretty pointless unless we are making a point that it can be done. A simpler method wiuld have been to just push that content into an SQLite db and used Prisma's sqlite client.
2. We can use Terraform + @fastify/aws-lambda + esbuild/webpack and push all this to AWS Cloud. The service can be a simple Lambda and the webapp can go to Cloudfront.
3. Setup CI?
4. Also web app is ugly?

Start to finish this has taken about 5 hours on and off. Prisma's driver is not well documented, and that took a while.

## Setup

```
yarn install
```

After the installation is done, then

```
cd ./packages/services && yarn watch
```

This will start the service running in port 3000. In a different terminal

```
cd ./packages/web-app && yarn start
```

Which should start the web in a different port, probably 3001.

There are some tests for `sql4csv`.
