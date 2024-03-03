import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutClinicInput } from "../inputs/PatientCreateOrConnectWithoutClinicInput";
import { PatientCreateWithoutClinicInput } from "../inputs/PatientCreateWithoutClinicInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateNestedManyWithoutClinicInput", {})
export class PatientCreateNestedManyWithoutClinicInput {
  @TypeGraphQL.Field(_type => [PatientCreateWithoutClinicInput], {
    nullable: true
  })
  create?: PatientCreateWithoutClinicInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientCreateOrConnectWithoutClinicInput], {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutClinicInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  connect?: PatientWhereUniqueInput[] | undefined;
}
