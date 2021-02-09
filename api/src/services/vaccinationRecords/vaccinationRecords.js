import { db } from 'src/lib/db'

export const vaccinationRecords = () => {
  return db.vaccinationRecord.findMany()
}

export const vaccinationRecord = ({ id }) => {
  return db.vaccinationRecord.findUnique({
    where: { id },
  })
}

export const createVaccinationRecord = ({ input }) => {
  return db.vaccinationRecord.create({
    data: input,
  })
}

export const updateVaccinationRecord = ({ id, input }) => {
  return db.vaccinationRecord.update({
    data: input,
    where: { id },
  })
}

export const deleteVaccinationRecord = ({ id }) => {
  return db.vaccinationRecord.delete({
    where: { id },
  })
}
