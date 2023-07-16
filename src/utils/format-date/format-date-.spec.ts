import { formatDate } from "./format-date"

describe('formatDate', () => {
  it('should format date', () => {
    const date = '2020-01-01T20:00:00.000Z'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('Jan 1, 2020')
  })

  it('should format date with different locale', () => {
    const date = '2020-01-01T20:00:00.000Z'
    const formattedDate = formatDate(date, 'pt-BR')
    expect(formattedDate).toBe('1 de jan. de 2020')
  })

  it('should return empty string if date is invalid', () => {
    const date = 'invalid date'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('')
  })

  it('should return emmpty string if date is empty', () => {
    const date = ''
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('')
  })
})