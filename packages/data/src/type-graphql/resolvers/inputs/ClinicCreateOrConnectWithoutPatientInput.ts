import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicCreateWithoutPatientInput } from "../inputs/ClinicCreateWithoutPatientInput";
import { ClinicWhereUniqueInput } from "../inputs/ClinicWhereUniqueInput";

@TypeGraphQL.InputType("ClinicCreateOrConnectWithoutPatientInput", {})
export class ClinicCreateOrConnectWithoutPatientInput {
  @TypeGraphQL.Field(_type => ClinicWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicCreateWithoutPatientInput, {
    nullable: false
  })
  create!: ClinicCreateWithoutPatientInput;
}
