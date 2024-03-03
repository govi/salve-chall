import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicOrderByWithAggregationInput } from "../../../inputs/ClinicOrderByWithAggregationInput";
import { ClinicScalarWhereWithAggregatesInput } from "../../../inputs/ClinicScalarWhereWithAggregatesInput";
import { ClinicWhereInput } from "../../../inputs/ClinicWhereInput";
import { ClinicScalarFieldEnum } from "../../../../enums/ClinicScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByClinicArgs {
  @TypeGraphQL.Field(_type => ClinicWhereInput, {
    nullable: true
  })
  where?: ClinicWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClinicOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ClinicOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => ClinicScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ClinicScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
