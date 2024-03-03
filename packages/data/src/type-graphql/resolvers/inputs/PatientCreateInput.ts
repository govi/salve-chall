import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicCreateNestedOneWithoutPatientInput } from "../inputs/ClinicCreateNestedOneWithoutPatientInput";

@TypeGraphQL.InputType("PatientCreateInput", {})
export class PatientCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dateOfBirth!: Date;

  @TypeGraphQL.Field(_type => ClinicCreateNestedOneWithoutPatientInput, {
    nullable: false
  })
  clinic!: ClinicCreateNestedOneWithoutPatientInput;
}
