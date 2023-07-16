import { MovieList } from '@/components/movie-list'
import { APIPopularResponse, Filter } from '@/types'
import { API, fetchData, getMovies } from '@/utils'

interface MoviesProps {
  activeFilters: Filter[]
}

export async function Movies({ activeFilters }: MoviesProps) {
  const genresFilter = activeFilters.length ? `&with_genres=${activeFilters}` : ''

  const movieData = await fetchData<APIPopularResponse>({
    url: `${API.POPULAR.concat(genresFilter)}`,
  })

  return <MovieList movies={getMovies(movieData)} />
}
