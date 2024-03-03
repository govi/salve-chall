import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateNestedManyWithoutClinicInput } from "../inputs/PatientCreateNestedManyWithoutClinicInput";

@TypeGraphQL.InputType("ClinicCreateInput", {})
export class ClinicCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PatientCreateNestedManyWithoutClinicInput, {
    nullable: true
  })
  Patient?: PatientCreateNestedManyWithoutClinicInput | undefined;
}
