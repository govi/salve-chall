import * as TypeGraphQL from "type-graphql";

export enum PatientScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  dateOfBirth = "dateOfBirth",
  clinicId = "clinicId"
}
TypeGraphQL.registerEnumType(PatientScalarFieldEnum, {
  name: "PatientScalarFieldEnum",
  description: undefined,
});
