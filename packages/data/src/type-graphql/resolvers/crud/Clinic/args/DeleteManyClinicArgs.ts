import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicWhereInput } from "../../../inputs/ClinicWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyClinicArgs {
  @TypeGraphQL.Field(_type => ClinicWhereInput, {
    nullable: true
  })
  where?: ClinicWhereInput | undefined;
}
