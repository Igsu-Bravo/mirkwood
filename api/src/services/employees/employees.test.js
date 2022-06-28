import { employees } from './employees'

describe('employees', () => {
  scenario('returns all employees', async (scenario) => {
    const result = await employees()

    expect(result.length).toEqual(Object.keys(scenario.employee).length)
  })
})
