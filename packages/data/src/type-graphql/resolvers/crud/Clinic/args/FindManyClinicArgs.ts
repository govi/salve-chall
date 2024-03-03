import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicOrderByWithRelationInput } from "../../../inputs/ClinicOrderByWithRelationInput";
import { ClinicWhereInput } from "../../../inputs/ClinicWhereInput";
import { ClinicWhereUniqueInput } from "../../../inputs/ClinicWhereUniqueInput";
import { ClinicScalarFieldEnum } from "../../../../enums/ClinicScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyClinicArgs {
  @TypeGraphQL.Field(_type => ClinicWhereInput, {
    nullable: true
  })
  where?: ClinicWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClinicOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ClinicOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClinicWhereUniqueInput, {
    nullable: true
  })
  cursor?: ClinicWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ClinicScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
