import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: { data: { name: 'String', latitude: 1459789, longitude: 3810196 } },
    two: { data: { name: 'String', latitude: 4749316, longitude: 9564268 } },
  },
})

export type StandardScenario = typeof standard
