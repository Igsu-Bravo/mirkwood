import type { Prisma, Office } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OfficeCreateArgs>({
  office: {
    one: {
      data: {
        officeName: 'String',
        Company: {
          create: {
            name: 'String',
            latitude: 6186793.267430888,
            longitude: 6520625.325483149,
          },
        },
      },
    },
    two: {
      data: {
        officeName: 'String',
        Company: {
          create: {
            name: 'String',
            latitude: 2201365.625806013,
            longitude: 4508706.779357492,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Office, 'office'>
