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
            latitude: 9347903.356892701,
            longitude: 2432809.6305395896,
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
            latitude: 4556265.1674449835,
            longitude: 281897.90080062504,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Office, 'office'>
