import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicCountPatientArgs } from "./args/ClinicCountPatientArgs";

@TypeGraphQL.ObjectType("ClinicCount", {})
export class ClinicCount {
  Patient!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Patient",
    nullable: false
  })
  getPatient(@TypeGraphQL.Root() root: ClinicCount, @TypeGraphQL.Args() args: ClinicCountPatientArgs): number {
    return root.Patient;
  }
}
