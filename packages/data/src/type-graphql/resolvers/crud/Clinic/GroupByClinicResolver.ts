import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByClinicArgs } from "./args/GroupByClinicArgs";
import { Clinic } from "../../../models/Clinic";
import { ClinicGroupBy } from "../../outputs/ClinicGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Clinic)
export class GroupByClinicResolver {
  @TypeGraphQL.Query(_returns => [ClinicGroupBy], {
    nullable: false
  })
  async groupByClinic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByClinicArgs): Promise<ClinicGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinic.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
