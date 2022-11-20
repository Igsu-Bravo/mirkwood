import type { Prisma, Company } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String',
        latitude: 2128834.575186438,
        longitude: 692925.3544417402,
      },
    },
    two: {
      data: {
        name: 'String',
        latitude: 1613895.4386216863,
        longitude: 707096.8303788416,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Company, 'company'>
