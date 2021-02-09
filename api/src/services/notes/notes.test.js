import { notes, note, createNote, updateNote, deleteNote } from './notes'

describe('notes', () => {
  scenario('returns all notes', async (scenario) => {
    const result = await notes()

    expect(result.length).toEqual(Object.keys(scenario.note).length)
  })

  scenario('returns a single note', async (scenario) => {
    const result = await note({ id: scenario.note.one.id })

    expect(result).toEqual(scenario.note.one)
  })

  scenario('creates a note', async (scenario) => {
    const result = await createNote({
      input: { ownerId: 'String', ownerType: 6192330, message: 'String' },
    })

    expect(result.ownerId).toEqual('String')
    expect(result.ownerType).toEqual(6192330)
    expect(result.message).toEqual('String')
  })

  scenario('updates a note', async (scenario) => {
    const original = await note({ id: scenario.note.one.id })
    const result = await updateNote({
      id: original.id,
      input: { ownerId: 'String2' },
    })

    expect(result.ownerId).toEqual('String2')
  })

  scenario('deletes a note', async (scenario) => {
    const original = await deleteNote({ id: scenario.note.one.id })
    const result = await note({ id: original.id })

    expect(result).toEqual(null)
  })
})
