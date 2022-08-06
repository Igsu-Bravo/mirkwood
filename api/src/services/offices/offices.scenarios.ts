import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OfficeCreateArgs>({
  office: {
    one: { data: { officeName: 'String' } },
    two: { data: { officeName: 'String' } },
  },
})

export type StandardScenario = typeof standard
