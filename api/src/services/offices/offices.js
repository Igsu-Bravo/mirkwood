import { db } from 'src/lib/db'

export const offices = () => {
  return db.office.findMany()
}

export const office = ({ id }) => {
  return db.office.findUnique({
    where: { id },
  })
}

export const createOffice = ({ input }) => {
  return db.office.create({
    data: input,
  })
}

export const updateOffice = ({ id, input }) => {
  return db.office.update({
    data: input,
    where: { id },
  })
}

export const deleteOffice = ({ id }) => {
  return db.office.delete({
    where: { id },
  })
}

export const Office = {
  employees: (_obj, { root }) =>
    db.office.findUnique({ where: { id: root.id } }).employees(),
}
