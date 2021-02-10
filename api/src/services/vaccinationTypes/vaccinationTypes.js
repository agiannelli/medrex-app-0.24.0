import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const vaccinationTypes = () => {
  return db.vaccinationType.findMany()
}

export const vaccinationType = ({ id }) => {
  return db.vaccinationType.findUnique({
    where: { id },
  })
}

export const createVaccinationType = ({ input }) => {
  requireAuth()
  return db.vaccinationType.create({
    data: input,
  })
}

export const updateVaccinationType = ({ id, input }) => {
  requireAuth()
  return db.vaccinationType.update({
    data: input,
    where: { id },
  })
}

export const deleteVaccinationType = ({ id }) => {
  requireAuth()
  return db.vaccinationType.delete({
    where: { id },
  })
}
