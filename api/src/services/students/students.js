import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const students = () => {
  return db.student.findMany()
}

export const student = ({ id }) => {
  return db.student.findUnique({
    where: { id },
  })
}

export const createStudent = ({ input }) => {
  requireAuth()
  return db.student.create({
    data: input,
  })
}

export const updateStudent = ({ id, input }) => {
  requireAuth()
  return db.student.update({
    data: input,
    where: { id },
  })
}

export const deleteStudent = ({ id }) => {
  requireAuth()
  return db.student.delete({
    where: { id },
  })
}
