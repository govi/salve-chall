import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicUpdateInput } from "../../../inputs/ClinicUpdateInput";
import { ClinicWhereUniqueInput } from "../../../inputs/ClinicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneClinicArgs {
  @TypeGraphQL.Field(_type => ClinicUpdateInput, {
    nullable: false
  })
  data!: ClinicUpdateInput;

  @TypeGraphQL.Field(_type => ClinicWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicWhereUniqueInput;
}
