import {
  developers,
  developer,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper,
} from './developers'
import type { StandardScenario } from './developers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('developers', () => {
  scenario('returns all developers', async (scenario: StandardScenario) => {
    const result = await developers()

    expect(result.length).toEqual(Object.keys(scenario.developer).length)
  })

  scenario('returns a single developer', async (scenario: StandardScenario) => {
    const result = await developer({ id: scenario.developer.one.id })

    expect(result).toEqual(scenario.developer.one)
  })

  scenario('creates a developer', async (scenario: StandardScenario) => {
    const result = await createDeveloper({
      input: {
        alias: 'String',
        role: 'String',
        companyId: scenario.developer.two.companyId,
      },
    })

    expect(result.alias).toEqual('String')
    expect(result.role).toEqual('String')
    expect(result.companyId).toEqual(scenario.developer.two.companyId)
  })

  scenario('updates a developer', async (scenario: StandardScenario) => {
    const original = await developer({ id: scenario.developer.one.id })
    const result = await updateDeveloper({
      id: original.id,
      input: { alias: 'String2' },
    })

    expect(result.alias).toEqual('String2')
  })

  scenario('deletes a developer', async (scenario: StandardScenario) => {
    const original = await deleteDeveloper({ id: scenario.developer.one.id })
    const result = await developer({ id: original.id })

    expect(result).toEqual(null)
  })
})
