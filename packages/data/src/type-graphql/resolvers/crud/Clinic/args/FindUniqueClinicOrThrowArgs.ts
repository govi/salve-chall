import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicWhereUniqueInput } from "../../../inputs/ClinicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueClinicOrThrowArgs {
  @TypeGraphQL.Field(_type => ClinicWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicWhereUniqueInput;
}
