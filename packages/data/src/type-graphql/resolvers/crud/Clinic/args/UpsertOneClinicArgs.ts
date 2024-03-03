import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicCreateInput } from "../../../inputs/ClinicCreateInput";
import { ClinicUpdateInput } from "../../../inputs/ClinicUpdateInput";
import { ClinicWhereUniqueInput } from "../../../inputs/ClinicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneClinicArgs {
  @TypeGraphQL.Field(_type => ClinicWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicCreateInput, {
    nullable: false
  })
  create!: ClinicCreateInput;

  @TypeGraphQL.Field(_type => ClinicUpdateInput, {
    nullable: false
  })
  update!: ClinicUpdateInput;
}
