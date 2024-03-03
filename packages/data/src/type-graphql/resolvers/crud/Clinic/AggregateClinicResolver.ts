import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateClinicArgs } from "./args/AggregateClinicArgs";
import { Clinic } from "../../../models/Clinic";
import { AggregateClinic } from "../../outputs/AggregateClinic";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Clinic)
export class AggregateClinicResolver {
  @TypeGraphQL.Query(_returns => AggregateClinic, {
    nullable: false
  })
  async aggregateClinic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateClinicArgs): Promise<AggregateClinic> {
    return getPrismaFromContext(ctx).clinic.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
