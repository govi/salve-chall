import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScalarWhereInput } from "../inputs/PatientScalarWhereInput";
import { PatientUpdateManyMutationInput } from "../inputs/PatientUpdateManyMutationInput";

@TypeGraphQL.InputType("PatientUpdateManyWithWhereWithoutClinicInput", {})
export class PatientUpdateManyWithWhereWithoutClinicInput {
  @TypeGraphQL.Field(_type => PatientScalarWhereInput, {
    nullable: false
  })
  where!: PatientScalarWhereInput;

  @TypeGraphQL.Field(_type => PatientUpdateManyMutationInput, {
    nullable: false
  })
  data!: PatientUpdateManyMutationInput;
}
