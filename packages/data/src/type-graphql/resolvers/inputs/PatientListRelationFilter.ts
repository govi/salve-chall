import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientListRelationFilter", {})
export class PatientListRelationFilter {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  every?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  some?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  none?: PatientWhereInput | undefined;
}
