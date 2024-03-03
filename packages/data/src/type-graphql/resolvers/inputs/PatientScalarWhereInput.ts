import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PatientScalarWhereInput", {})
export class PatientScalarWhereInput {
  @TypeGraphQL.Field(_type => [PatientScalarWhereInput], {
    nullable: true
  })
  AND?: PatientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereInput], {
    nullable: true
  })
  OR?: PatientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereInput], {
    nullable: true
  })
  NOT?: PatientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dateOfBirth?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  clinicId?: StringFilter | undefined;
}
