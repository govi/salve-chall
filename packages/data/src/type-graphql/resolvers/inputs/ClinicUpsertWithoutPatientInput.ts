import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicCreateWithoutPatientInput } from "../inputs/ClinicCreateWithoutPatientInput";
import { ClinicUpdateWithoutPatientInput } from "../inputs/ClinicUpdateWithoutPatientInput";
import { ClinicWhereInput } from "../inputs/ClinicWhereInput";

@TypeGraphQL.InputType("ClinicUpsertWithoutPatientInput", {})
export class ClinicUpsertWithoutPatientInput {
  @TypeGraphQL.Field(_type => ClinicUpdateWithoutPatientInput, {
    nullable: false
  })
  update!: ClinicUpdateWithoutPatientInput;

  @TypeGraphQL.Field(_type => ClinicCreateWithoutPatientInput, {
    nullable: false
  })
  create!: ClinicCreateWithoutPatientInput;

  @TypeGraphQL.Field(_type => ClinicWhereInput, {
    nullable: true
  })
  where?: ClinicWhereInput | undefined;
}
