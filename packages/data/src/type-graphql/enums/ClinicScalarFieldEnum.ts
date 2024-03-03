import * as TypeGraphQL from "type-graphql";

export enum ClinicScalarFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(ClinicScalarFieldEnum, {
  name: "ClinicScalarFieldEnum",
  description: undefined,
});
