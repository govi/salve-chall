import { Clinic, Patient } from "@salve-chall/data"
import request, { gql } from "graphql-request"
import {
  ChangeEvent,
  ReducerWithoutAction,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react"
import "./App.css"

const getClinicsQuery = gql`
  query q($where: ClinicWhereInput) {
    clinics(where: $where) {
      id
      name
    }
  }
`

const getPatientsQuery = gql`
  query q(
    $where: PatientWhereInput
    $order: [PatientOrderByWithRelationInput!]
  ) {
    patients(where: $where, orderBy: $order) {
      id
      firstName
      lastName
      dateOfBirth
    }
  }
`

const getClinics = async (): Promise<Clinic[]> => {
  const result = await request({
    url: "http://localhost:3000/graphql",
    document: getClinicsQuery,
  })
  return (result as any)["clinics"]
}

const getPatients = async (
  clinicId: string,
  sortOrder?: SortOrder
): Promise<Patient[]> => {
  const variables: any = {
    where: {
      clinicId: {
        equals: clinicId,
      },
    },
  }
  if (sortOrder && sortOrder !== "none") {
    variables["order"] = [
      {
        dateOfBirth: sortOrder,
      },
    ]
  }
  const result = await request({
    url: "http://localhost:3000/graphql",
    document: getPatientsQuery,
    variables,
  })
  return (result as any)["patients"]
}

type SortOrder = "asc" | "desc" | "none"
const tristateToggleReducer: ReducerWithoutAction<SortOrder> = (
  state: SortOrder
): SortOrder => {
  switch (state) {
    case "asc":
      return "desc"
    case "desc":
      return "none"
    default:
      return "asc"
  }
}

const App = () => {
  const [clinics, setClinics] = useState<Clinic[]>([])
  const [selectedClinicId, setSelectedClinicId] = useState("1")
  const [patients, setPatients] = useState<Patient[]>([])
  const [sortOrder, cycleSortOrder] = useReducer(tristateToggleReducer, "asc")

  useEffect(() => {
    void getClinics().then(z => setClinics(z))
  }, [])

  const fetchPatients = useCallback((clinicId: string, s: SortOrder) => {
    void getPatients(clinicId, s).then(z => setPatients(z))
  }, [])

  const onClinicChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedClinicId(e.currentTarget.value)
    fetchPatients(e.currentTarget.value, sortOrder)
  }, [])

  useEffect(() => {
    fetchPatients(selectedClinicId, sortOrder)
  }, [sortOrder])

  return (
    <div className='App'>
      <header className='App-header'>
        <select
          name='clinic'
          onChange={onClinicChange}
          value={selectedClinicId}
        >
          {clinics.map(c => (
            <option value={c.id} key={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </header>
      <div className='App-content'>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>
                Date of Birth{" "}
                <button onClick={cycleSortOrder}>{sortOrder}</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map(p => (
              <tr>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{new Date(p.dateOfBirth).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
