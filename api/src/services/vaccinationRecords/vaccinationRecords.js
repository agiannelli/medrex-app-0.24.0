import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const vaccinationRecords = () => {
  return db.vaccinationRecord.findMany()
}

export const vaccinationRecord = ({ id }) => {
  return db.vaccinationRecord.findUnique({
    where: { id },
  })
}

export const createVaccinationRecord = ({ input }) => {
  requireAuth()
  return db.vaccinationRecord.create({
    data: input,
  })
}

export const updateVaccinationRecord = ({ id, input }) => {
  requireAuth()
  return db.vaccinationRecord.update({
    data: input,
    where: { id },
  })
}

export const deleteVaccinationRecord = ({ id }) => {
  requireAuth()
  return db.vaccinationRecord.delete({
    where: { id },
  })
}
