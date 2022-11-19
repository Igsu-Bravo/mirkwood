import type { Prisma, Developer } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DeveloperCreateArgs>({
  developer: {
    one: {
      data: {
        alias: 'String',
        role: 'String',
        company: {
          create: {
            name: 'String',
            latitude: 5232481.371292339,
            longitude: 7132105.3260085555,
          },
        },
      },
    },
    two: {
      data: {
        alias: 'String',
        role: 'String',
        company: {
          create: {
            name: 'String',
            latitude: 1676341.6735616676,
            longitude: 1993197.244710989,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Developer, 'developer'>
