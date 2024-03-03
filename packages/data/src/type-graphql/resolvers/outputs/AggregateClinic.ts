import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicCountAggregate } from "../outputs/ClinicCountAggregate";
import { ClinicMaxAggregate } from "../outputs/ClinicMaxAggregate";
import { ClinicMinAggregate } from "../outputs/ClinicMinAggregate";

@TypeGraphQL.ObjectType("AggregateClinic", {})
export class AggregateClinic {
  @TypeGraphQL.Field(_type => ClinicCountAggregate, {
    nullable: true
  })
  _count!: ClinicCountAggregate | null;

  @TypeGraphQL.Field(_type => ClinicMinAggregate, {
    nullable: true
  })
  _min!: ClinicMinAggregate | null;

  @TypeGraphQL.Field(_type => ClinicMaxAggregate, {
    nullable: true
  })
  _max!: ClinicMaxAggregate | null;
}
