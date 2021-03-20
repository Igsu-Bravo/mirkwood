import { db } from 'src/lib/db'

export const employees = () => {
  return db.employee.findMany()
}

export const Employee = {
  user: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).user(),
  company: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).company(),
  office: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).office(),
}
