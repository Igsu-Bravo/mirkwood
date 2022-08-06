import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: { data: { name: 'String', latitude: 7819339, longitude: 7061511 } },
    two: { data: { name: 'String', latitude: 4078044, longitude: 9886502 } },
  },
})

export type StandardScenario = typeof standard
