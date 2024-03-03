import type { GraphQLResolveInfo } from "graphql"
import * as TypeGraphQL from "type-graphql"
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from "../../../helpers"
import { Clinic } from "../../../models/Clinic"
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput"
import { AggregateClinic } from "../../outputs/AggregateClinic"
import { ClinicGroupBy } from "../../outputs/ClinicGroupBy"
import { AggregateClinicArgs } from "./args/AggregateClinicArgs"
import { CreateOneClinicArgs } from "./args/CreateOneClinicArgs"
import { DeleteManyClinicArgs } from "./args/DeleteManyClinicArgs"
import { DeleteOneClinicArgs } from "./args/DeleteOneClinicArgs"
import { FindFirstClinicArgs } from "./args/FindFirstClinicArgs"
import { FindFirstClinicOrThrowArgs } from "./args/FindFirstClinicOrThrowArgs"
import { FindManyClinicArgs } from "./args/FindManyClinicArgs"
import { FindUniqueClinicArgs } from "./args/FindUniqueClinicArgs"
import { FindUniqueClinicOrThrowArgs } from "./args/FindUniqueClinicOrThrowArgs"
import { GroupByClinicArgs } from "./args/GroupByClinicArgs"
import { UpdateManyClinicArgs } from "./args/UpdateManyClinicArgs"
import { UpdateOneClinicArgs } from "./args/UpdateOneClinicArgs"
import { UpsertOneClinicArgs } from "./args/UpsertOneClinicArgs"

@TypeGraphQL.Resolver(_of => Clinic)
export class ClinicCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateClinic, {
    nullable: false,
  })
  async aggregateClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateClinicArgs
  ): Promise<AggregateClinic> {
    return getPrismaFromContext(ctx).clinic.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    })
  }

  @TypeGraphQL.Mutation(_returns => Clinic, {
    nullable: false,
  })
  async createOneClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneClinicArgs
  ): Promise<Clinic> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyClinicArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation(_returns => Clinic, {
    nullable: true,
  })
  async deleteOneClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneClinicArgs
  ): Promise<Clinic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query(_returns => Clinic, {
    nullable: true,
  })
  async findFirstClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstClinicArgs
  ): Promise<Clinic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query(_returns => Clinic, {
    nullable: true,
  })
  async findFirstClinicOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstClinicOrThrowArgs
  ): Promise<Clinic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query(_returns => [Clinic], {
    nullable: false,
  })
  async clinics(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyClinicArgs
  ): Promise<Clinic[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query(_returns => Clinic, {
    nullable: true,
  })
  async clinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueClinicArgs
  ): Promise<Clinic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query(_returns => Clinic, {
    nullable: true,
  })
  async getClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueClinicOrThrowArgs
  ): Promise<Clinic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query(_returns => [ClinicGroupBy], {
    nullable: false,
  })
  async groupByClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByClinicArgs
  ): Promise<ClinicGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    })
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyClinicArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation(_returns => Clinic, {
    nullable: true,
  })
  async updateOneClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneClinicArgs
  ): Promise<Clinic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation(_returns => Clinic, {
    nullable: false,
  })
  async upsertOneClinic(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneClinicArgs
  ): Promise<Clinic> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).clinic.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
