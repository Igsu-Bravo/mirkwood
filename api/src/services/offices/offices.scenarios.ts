import type { Prisma, Office } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OfficeCreateArgs>({
  office: {
    one: {
      data: {
        officeName: 'String',
        latitude: 9688114.443183757,
        longitude: 4254814.542936827,
        Company: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        officeName: 'String',
        latitude: 2771261.7872870513,
        longitude: 1052816.3396585044,
        Company: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Office, 'office'>
