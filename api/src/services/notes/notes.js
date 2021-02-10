import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const notes = () => {
  return db.note.findMany()
}

export const note = ({ id }) => {
  return db.note.findUnique({
    where: { id },
  })
}

export const createNote = ({ input }) => {
  requireAuth()
  return db.note.create({
    data: input,
  })
}

export const updateNote = ({ id, input }) => {
  requireAuth()
  return db.note.update({
    data: input,
    where: { id },
  })
}

export const deleteNote = ({ id }) => {
  requireAuth()
  return db.note.delete({
    where: { id },
  })
}
