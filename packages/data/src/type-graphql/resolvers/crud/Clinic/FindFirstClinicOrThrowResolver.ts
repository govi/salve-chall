import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstClinicOrThrowArgs } from "./args/FindFirstClinicOrThrowArgs";
import { Clinic } from "../../../models/Clinic";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Clinic)
export class FindFirstClinicOrThrowResolver {
  @TypeGraphQL.Query(_returns => Clinic, {
    nullable: true
  })
  async findFirstClinicOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstClinicOrThrowArgs): Promise<Clinic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinic.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
