import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicCountOrderByAggregateInput } from "../inputs/ClinicCountOrderByAggregateInput";
import { ClinicMaxOrderByAggregateInput } from "../inputs/ClinicMaxOrderByAggregateInput";
import { ClinicMinOrderByAggregateInput } from "../inputs/ClinicMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClinicOrderByWithAggregationInput", {})
export class ClinicOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ClinicCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ClinicCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClinicMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ClinicMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClinicMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ClinicMinOrderByAggregateInput | undefined;
}
