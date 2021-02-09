import { db } from 'src/lib/db'

export const notes = () => {
  return db.note.findMany()
}

export const note = ({ id }) => {
  return db.note.findUnique({
    where: { id },
  })
}

export const createNote = ({ input }) => {
  return db.note.create({
    data: input,
  })
}

export const updateNote = ({ id, input }) => {
  return db.note.update({
    data: input,
    where: { id },
  })
}

export const deleteNote = ({ id }) => {
  return db.note.delete({
    where: { id },
  })
}
