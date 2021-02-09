import { db } from 'src/lib/db'

export const vaccinationTypes = () => {
  return db.vaccinationType.findMany()
}

export const vaccinationType = ({ id }) => {
  return db.vaccinationType.findUnique({
    where: { id },
  })
}

export const createVaccinationType = ({ input }) => {
  return db.vaccinationType.create({
    data: input,
  })
}

export const updateVaccinationType = ({ id, input }) => {
  return db.vaccinationType.update({
    data: input,
    where: { id },
  })
}

export const deleteVaccinationType = ({ id }) => {
  return db.vaccinationType.delete({
    where: { id },
  })
}
