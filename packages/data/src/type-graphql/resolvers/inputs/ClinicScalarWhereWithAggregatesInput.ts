import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ClinicScalarWhereWithAggregatesInput", {})
export class ClinicScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ClinicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ClinicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ClinicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ClinicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
