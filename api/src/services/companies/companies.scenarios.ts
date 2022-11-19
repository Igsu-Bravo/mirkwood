import type { Prisma, Company } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String',
        latitude: 711655.2707966495,
        longitude: 5175422.326239809,
      },
    },
    two: {
      data: {
        name: 'String',
        latitude: 8604588.360062746,
        longitude: 132529.36044680476,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Company, 'company'>
