import {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
} from './students'

describe('students', () => {
  scenario('returns all students', async (scenario) => {
    const result = await students()

    expect(result.length).toEqual(Object.keys(scenario.student).length)
  })

  scenario('returns a single student', async (scenario) => {
    const result = await student({ id: scenario.student.one.id })

    expect(result).toEqual(scenario.student.one)
  })

  scenario('creates a student', async (scenario) => {
    const result = await createStudent({
      input: { email: 'String', name: 'String' },
    })

    expect(result.email).toEqual('String')
    expect(result.name).toEqual('String')
  })

  scenario('updates a student', async (scenario) => {
    const original = await student({ id: scenario.student.one.id })
    const result = await updateStudent({
      id: original.id,
      input: { email: 'String2' },
    })

    expect(result.email).toEqual('String2')
  })

  scenario('deletes a student', async (scenario) => {
    const original = await deleteStudent({ id: scenario.student.one.id })
    const result = await student({ id: original.id })

    expect(result).toEqual(null)
  })
})
