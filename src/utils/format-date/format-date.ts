export const formatDate = (date: string, locale = 'en-US') => {
  const isValidDate = new Date(date).toString() !== 'Invalid Date'

  if (!isValidDate) {
    return ''
  }

  return Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}
