import {
  vaccinationTypes,
  vaccinationType,
  createVaccinationType,
  updateVaccinationType,
  deleteVaccinationType,
} from './vaccinationTypes'

describe('vaccinationTypes', () => {
  scenario('returns all vaccinationTypes', async (scenario) => {
    const result = await vaccinationTypes()

    expect(result.length).toEqual(Object.keys(scenario.vaccinationType).length)
  })

  scenario('returns a single vaccinationType', async (scenario) => {
    const result = await vaccinationType({
      id: scenario.vaccinationType.one.id,
    })

    expect(result).toEqual(scenario.vaccinationType.one)
  })

  scenario('creates a vaccinationType', async (scenario) => {
    const result = await createVaccinationType({
      input: {
        name: 'String',
        recurrenceType: 5251522,
        recurrenceInterval: 584694,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.isRecurring).toEqual()
    expect(result.recurrenceType).toEqual(5251522)
    expect(result.recurrenceInterval).toEqual(584694)
  })

  scenario('updates a vaccinationType', async (scenario) => {
    const original = await vaccinationType({
      id: scenario.vaccinationType.one.id,
    })

    const result = await updateVaccinationType({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a vaccinationType', async (scenario) => {
    const original = await deleteVaccinationType({
      id: scenario.vaccinationType.one.id,
    })

    const result = await vaccinationType({ id: original.id })

    expect(result).toEqual(null)
  })
})
