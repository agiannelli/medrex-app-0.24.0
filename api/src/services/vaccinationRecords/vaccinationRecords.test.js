import {
  vaccinationRecords,
  vaccinationRecord,
  createVaccinationRecord,
  updateVaccinationRecord,
  deleteVaccinationRecord,
} from './vaccinationRecords'

describe('vaccinationRecords', () => {
  scenario('returns all vaccinationRecords', async (scenario) => {
    const result = await vaccinationRecords()

    expect(result.length).toEqual(
      Object.keys(scenario.vaccinationRecord).length
    )
  })

  scenario('returns a single vaccinationRecord', async (scenario) => {
    const result = await vaccinationRecord({
      id: scenario.vaccinationRecord.one.id,
    })

    expect(result).toEqual(scenario.vaccinationRecord.one)
  })

  scenario('creates a vaccinationRecord', async (scenario) => {
    const result = await createVaccinationRecord({
      input: {
        studentId: 9504097,
        vaccinationType: 4556961,
        vaccinationDate: '2021-02-09T05:49:19Z',
      },
    })

    expect(result.studentId).toEqual(9504097)
    expect(result.vaccinationType).toEqual(4556961)
    expect(result.vaccinationDate).toEqual('2021-02-09T05:49:19Z')
  })

  scenario('updates a vaccinationRecord', async (scenario) => {
    const original = await vaccinationRecord({
      id: scenario.vaccinationRecord.one.id,
    })

    const result = await updateVaccinationRecord({
      id: original.id,
      input: { studentId: 6861128 },
    })

    expect(result.studentId).toEqual(6861128)
  })

  scenario('deletes a vaccinationRecord', async (scenario) => {
    const original = await deleteVaccinationRecord({
      id: scenario.vaccinationRecord.one.id,
    })

    const result = await vaccinationRecord({ id: original.id })

    expect(result).toEqual(null)
  })
})
