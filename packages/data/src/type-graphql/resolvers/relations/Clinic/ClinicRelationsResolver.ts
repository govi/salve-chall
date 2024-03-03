import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Clinic } from "../../../models/Clinic";
import { Patient } from "../../../models/Patient";
import { ClinicPatientArgs } from "./args/ClinicPatientArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Clinic)
export class ClinicRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Patient], {
    nullable: false
  })
  async Patient(@TypeGraphQL.Root() clinic: Clinic, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ClinicPatientArgs): Promise<Patient[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinic.findUniqueOrThrow({
      where: {
        id: clinic.id,
      },
    }).Patient({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
