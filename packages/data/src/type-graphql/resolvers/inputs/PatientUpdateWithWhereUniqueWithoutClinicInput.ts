import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutClinicInput } from "../inputs/PatientUpdateWithoutClinicInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateWithWhereUniqueWithoutClinicInput", {})
export class PatientUpdateWithWhereUniqueWithoutClinicInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutClinicInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutClinicInput;
}
