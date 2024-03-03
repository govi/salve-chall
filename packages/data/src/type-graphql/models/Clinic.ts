import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Patient } from "../models/Patient";
import { ClinicCount } from "../resolvers/outputs/ClinicCount";

@TypeGraphQL.ObjectType("Clinic", {})
export class Clinic {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  Patient?: Patient[];

  @TypeGraphQL.Field(_type => ClinicCount, {
    nullable: true
  })
  _count?: ClinicCount | null;
}
