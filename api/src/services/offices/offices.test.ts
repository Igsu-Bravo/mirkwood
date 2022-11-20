import type { Office } from '@prisma/client'

import {
  offices,
  office,
  createOffice,
  updateOffice,
  deleteOffice,
} from './offices'
import type { StandardScenario } from './offices.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('offices', () => {
  scenario('returns all offices', async (scenario: StandardScenario) => {
    const result = await offices()

    expect(result.length).toEqual(Object.keys(scenario.office).length)
  })

  scenario('returns a single office', async (scenario: StandardScenario) => {
    const result = await office({ id: scenario.office.one.id })

    expect(result).toEqual(scenario.office.one)
  })

  scenario('creates a office', async (scenario: StandardScenario) => {
    const result = await createOffice({
      input: {
        officeName: 'String',
        companyId: scenario.office.two.companyId,
        latitude: 3616895.1383884693,
        longitude: 5427001.310099968,
      },
    })

    expect(result.officeName).toEqual('String')
    expect(result.companyId).toEqual(scenario.office.two.companyId)
    expect(result.latitude).toEqual(3616895.1383884693)
    expect(result.longitude).toEqual(5427001.310099968)
  })

  scenario('updates a office', async (scenario: StandardScenario) => {
    const original = (await office({ id: scenario.office.one.id })) as Office
    const result = await updateOffice({
      id: original.id,
      input: { officeName: 'String2' },
    })

    expect(result.officeName).toEqual('String2')
  })

  scenario('deletes a office', async (scenario: StandardScenario) => {
    const original = (await deleteOffice({
      id: scenario.office.one.id,
    })) as Office
    const result = await office({ id: original.id })

    expect(result).toEqual(null)
  })
})
