import {
  offices,
  office,
  createOffice,
  updateOffice,
  deleteOffice,
} from './offices'

describe('offices', () => {
  scenario('returns all offices', async (scenario) => {
    const result = await offices()

    expect(result.length).toEqual(Object.keys(scenario.office).length)
  })

  scenario('returns a single office', async (scenario) => {
    const result = await office({ id: scenario.office.one.id })

    expect(result).toEqual(scenario.office.one)
  })

  scenario('creates a office', async (scenario) => {
    const result = await createOffice({
      input: { officeName: 'String' },
    })

    expect(result.officeName).toEqual('String')
  })

  scenario('updates a office', async (scenario) => {
    const original = await office({ id: scenario.office.one.id })
    const result = await updateOffice({
      id: original.id,
      input: { officeName: 'String2' },
    })

    expect(result.officeName).toEqual('String2')
  })

  scenario('deletes a office', async (scenario) => {
    const original = await deleteOffice({ id: scenario.office.one.id })
    const result = await office({ id: original.id })

    expect(result).toEqual(null)
  })
})
