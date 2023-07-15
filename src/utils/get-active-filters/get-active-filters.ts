import { Filter } from '@/types'

import { FILTERS_VALUES } from '../constants'

type SearchParams = { [key: string]: string | string[] | undefined }

export const getActiveFilters = (searchParams: SearchParams): Filter[] => {
  if (!searchParams) {
    return []
  }

  const genres = Array.isArray(searchParams.genre)
    ? searchParams.genre
    : [searchParams.genre]

  if (!genres) {
    return []
  }

  return genres
    .filter((genre): genre is Filter => !!genre && FILTERS_VALUES.includes(genre as Filter))
}