import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicCreateOrConnectWithoutPatientInput } from "../inputs/ClinicCreateOrConnectWithoutPatientInput";
import { ClinicCreateWithoutPatientInput } from "../inputs/ClinicCreateWithoutPatientInput";
import { ClinicWhereUniqueInput } from "../inputs/ClinicWhereUniqueInput";

@TypeGraphQL.InputType("ClinicCreateNestedOneWithoutPatientInput", {})
export class ClinicCreateNestedOneWithoutPatientInput {
  @TypeGraphQL.Field(_type => ClinicCreateWithoutPatientInput, {
    nullable: true
  })
  create?: ClinicCreateWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => ClinicCreateOrConnectWithoutPatientInput, {
    nullable: true
  })
  connectOrCreate?: ClinicCreateOrConnectWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => ClinicWhereUniqueInput, {
    nullable: true
  })
  connect?: ClinicWhereUniqueInput | undefined;
}
