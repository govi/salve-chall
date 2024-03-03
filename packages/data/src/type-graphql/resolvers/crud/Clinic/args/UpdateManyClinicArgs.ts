import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicUpdateManyMutationInput } from "../../../inputs/ClinicUpdateManyMutationInput";
import { ClinicWhereInput } from "../../../inputs/ClinicWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyClinicArgs {
  @TypeGraphQL.Field(_type => ClinicUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClinicUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ClinicWhereInput, {
    nullable: true
  })
  where?: ClinicWhereInput | undefined;
}
