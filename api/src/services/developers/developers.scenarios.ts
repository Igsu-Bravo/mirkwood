import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DeveloperCreateArgs>({
  developer: {
    one: {
      data: {
        alias: 'String',
        role: 'String',
        company: {
          create: { name: 'String', latitude: 5448965, longitude: 4215634 },
        },
      },
    },
    two: {
      data: {
        alias: 'String',
        role: 'String',
        company: {
          create: { name: 'String', latitude: 125343, longitude: 5632547 },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
