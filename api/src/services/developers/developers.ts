import type {
  QueryResolvers,
  MutationResolvers,
  DeveloperRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const developers: QueryResolvers['developers'] = () => {
  return db.developer.findMany()
}

export const developer: QueryResolvers['developer'] = ({ id }) => {
  return db.developer.findUnique({
    where: { id },
  })
}

export const createDeveloper: MutationResolvers['createDeveloper'] = ({
  input,
}) => {
  return db.developer.create({
    data: input,
  })
}

export const updateDeveloper: MutationResolvers['updateDeveloper'] = ({
  id,
  input,
}) => {
  return db.developer.update({
    data: input,
    where: { id },
  })
}

export const deleteDeveloper: MutationResolvers['deleteDeveloper'] = ({
  id,
}) => {
  return db.developer.delete({
    where: { id },
  })
}

export const Developer: DeveloperRelationResolvers = {
  company: (_obj, { root }) => {
    return db.developer.findUnique({ where: { id: root?.id } }).company()
  },
}
