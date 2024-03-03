import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicCreateInput } from "../../../inputs/ClinicCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneClinicArgs {
  @TypeGraphQL.Field(_type => ClinicCreateInput, {
    nullable: false
  })
  data!: ClinicCreateInput;
}
