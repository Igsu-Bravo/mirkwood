import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DeveloperCreateArgs>({
  developer: {
    one: {
      data: {
        alias: 'String',
        role: 'String',
        company: {
          create: { name: 'String', latitude: 2995040, longitude: 5396333 },
        },
      },
    },
    two: {
      data: {
        alias: 'String',
        role: 'String',
        company: {
          create: { name: 'String', latitude: 6417094, longitude: 2049863 },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
