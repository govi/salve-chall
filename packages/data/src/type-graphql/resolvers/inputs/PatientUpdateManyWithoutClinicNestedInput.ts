import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutClinicInput } from "../inputs/PatientCreateOrConnectWithoutClinicInput";
import { PatientCreateWithoutClinicInput } from "../inputs/PatientCreateWithoutClinicInput";
import { PatientScalarWhereInput } from "../inputs/PatientScalarWhereInput";
import { PatientUpdateManyWithWhereWithoutClinicInput } from "../inputs/PatientUpdateManyWithWhereWithoutClinicInput";
import { PatientUpdateWithWhereUniqueWithoutClinicInput } from "../inputs/PatientUpdateWithWhereUniqueWithoutClinicInput";
import { PatientUpsertWithWhereUniqueWithoutClinicInput } from "../inputs/PatientUpsertWithWhereUniqueWithoutClinicInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateManyWithoutClinicNestedInput", {})
export class PatientUpdateManyWithoutClinicNestedInput {
  @TypeGraphQL.Field(_type => [PatientCreateWithoutClinicInput], {
    nullable: true
  })
  create?: PatientCreateWithoutClinicInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientCreateOrConnectWithoutClinicInput], {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutClinicInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientUpsertWithWhereUniqueWithoutClinicInput], {
    nullable: true
  })
  upsert?: PatientUpsertWithWhereUniqueWithoutClinicInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  set?: PatientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PatientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  delete?: PatientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  connect?: PatientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientUpdateWithWhereUniqueWithoutClinicInput], {
    nullable: true
  })
  update?: PatientUpdateWithWhereUniqueWithoutClinicInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientUpdateManyWithWhereWithoutClinicInput], {
    nullable: true
  })
  updateMany?: PatientUpdateManyWithWhereWithoutClinicInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PatientScalarWhereInput[] | undefined;
}
