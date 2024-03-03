import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicWhereInput } from "../inputs/ClinicWhereInput";
import { PatientListRelationFilter } from "../inputs/PatientListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ClinicWhereUniqueInput", {})
export class ClinicWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [ClinicWhereInput], {
    nullable: true
  })
  AND?: ClinicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicWhereInput], {
    nullable: true
  })
  OR?: ClinicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicWhereInput], {
    nullable: true
  })
  NOT?: ClinicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PatientListRelationFilter, {
    nullable: true
  })
  Patient?: PatientListRelationFilter | undefined;
}
