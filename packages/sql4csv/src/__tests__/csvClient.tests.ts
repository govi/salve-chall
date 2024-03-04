import CSVClient, { CSVClientOptions } from "../csvClient"

const defaultOptions: CSVClientOptions = {
  tenantType: "clinics",
  tenantIdFieldName: "clinic_id",
}

describe("csv client tests", () => {
  it("should read csv content and return an object", async () => {
    const client = new CSVClient(defaultOptions)
    const resp = await client.query<{ id: string; name: string }>("clinics")
    expect(resp).toBeDefined()
    const result = resp.items
    expect(result.length).toBe(2)
    expect(result[0].id).toBe("1")
    expect(result[0].name).toBe("Salve Fertility")
    expect(result[1].name).toBe("London IVF")
  })

  it("should return only subset of fields requested", async () => {
    const client = new CSVClient(defaultOptions)
    const resp = await client.query<{ id: string; name: string }>("clinics", [
      "name",
    ])
    expect(resp).toBeDefined()
    const result = resp.items
    expect(result.length).toBe(2)
    expect(result[0].id).toBeUndefined()
    expect(result[0].name).toBe("Salve Fertility")
    expect(result[1].name).toBe("London IVF")
  })

  it("should ignore fields that do not exist", async () => {
    const client = new CSVClient(defaultOptions)
    const resp = await client.query<{ id: string; name: string }>("clinics", [
      "bingo",
    ])
    expect(resp).toBeDefined()
    const result = resp.items
    expect(result[0].id).toBeUndefined()
    expect(result[0].name).toBeUndefined()
    expect(result[1].name).toBeUndefined()
  })

  it("should throw when requesting tenant owned items without an tenant-id", async () => {
    const client = new CSVClient(defaultOptions)
    expect(() =>
      client.query<{ id: string; name: string }>("patients")
    ).rejects.toThrow("tenantId is required")
  })

  it("should throw when requesting tenant owned items without an tenant-id", async () => {
    const client = new CSVClient(defaultOptions)
    const resp = await client.query<{ id: string; date_of_birth: string }>(
      "patients",
      ["date_of_birth"],
      { clinic_id: 2 }
    )
    expect(resp).toBeDefined()
    const result = resp.items
    expect(result[2].date_of_birth).toBe("1983-11-23T00:00:00.000Z")
  })
})
