import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicUpdateWithoutPatientInput } from "../inputs/ClinicUpdateWithoutPatientInput";
import { ClinicWhereInput } from "../inputs/ClinicWhereInput";

@TypeGraphQL.InputType("ClinicUpdateToOneWithWhereWithoutPatientInput", {})
export class ClinicUpdateToOneWithWhereWithoutPatientInput {
  @TypeGraphQL.Field(_type => ClinicWhereInput, {
    nullable: true
  })
  where?: ClinicWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClinicUpdateWithoutPatientInput, {
    nullable: false
  })
  data!: ClinicUpdateWithoutPatientInput;
}
