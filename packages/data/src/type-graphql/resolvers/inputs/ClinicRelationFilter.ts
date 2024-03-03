import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicWhereInput } from "../inputs/ClinicWhereInput";

@TypeGraphQL.InputType("ClinicRelationFilter", {})
export class ClinicRelationFilter {
  @TypeGraphQL.Field(_type => ClinicWhereInput, {
    nullable: true
  })
  is?: ClinicWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClinicWhereInput, {
    nullable: true
  })
  isNot?: ClinicWhereInput | undefined;
}
