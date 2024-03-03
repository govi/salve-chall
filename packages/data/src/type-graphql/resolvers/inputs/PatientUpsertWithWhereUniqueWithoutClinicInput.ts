import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutClinicInput } from "../inputs/PatientCreateWithoutClinicInput";
import { PatientUpdateWithoutClinicInput } from "../inputs/PatientUpdateWithoutClinicInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpsertWithWhereUniqueWithoutClinicInput", {})
export class PatientUpsertWithWhereUniqueWithoutClinicInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutClinicInput, {
    nullable: false
  })
  update!: PatientUpdateWithoutClinicInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutClinicInput, {
    nullable: false
  })
  create!: PatientCreateWithoutClinicInput;
}
