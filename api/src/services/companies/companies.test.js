import {
  companies,
  company,
  createCompany,
  updateCompany,
  deleteCompany,
} from './companies'

describe('companies', () => {
  scenario('returns all companies', async (scenario) => {
    const result = await companies()

    expect(result.length).toEqual(Object.keys(scenario.company).length)
  })

  scenario('returns a single company', async (scenario) => {
    const result = await company({ id: scenario.company.one.id })

    expect(result).toEqual(scenario.company.one)
  })

  scenario('creates a company', async (scenario) => {
    const result = await createCompany({
      input: { companyName: 'String' },
    })

    expect(result.companyName).toEqual('String')
  })

  scenario('updates a company', async (scenario) => {
    const original = await company({ id: scenario.company.one.id })
    const result = await updateCompany({
      id: original.id,
      input: { companyName: 'String2' },
    })

    expect(result.companyName).toEqual('String2')
  })

  scenario('deletes a company', async (scenario) => {
    const original = await deleteCompany({ id: scenario.company.one.id })
    const result = await company({ id: original.id })

    expect(result).toEqual(null)
  })
})
