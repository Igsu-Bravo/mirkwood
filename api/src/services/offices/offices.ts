import type {
  QueryResolvers,
  MutationResolvers,
  OfficeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const offices: QueryResolvers['offices'] = () => {
  return db.office.findMany()
}

export const office: QueryResolvers['office'] = ({ id }) => {
  return db.office.findUnique({
    where: { id },
  })
}

export const createOffice: MutationResolvers['createOffice'] = ({ input }) => {
  return db.office.create({
    data: input,
  })
}

export const updateOffice: MutationResolvers['updateOffice'] = ({
  id,
  input,
}) => {
  return db.office.update({
    data: input,
    where: { id },
  })
}

export const deleteOffice: MutationResolvers['deleteOffice'] = ({ id }) => {
  return db.office.delete({
    where: { id },
  })
}

export const Office: OfficeRelationResolvers = {
  Company: (_obj, { root }) => {
    return db.office.findUnique({ where: { id: root?.id } }).Company()
  },
}
