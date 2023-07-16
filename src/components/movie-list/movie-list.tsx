import { MovieItem } from '@/components'
import { APIPopularResponse, Filter } from '@/types'
import { API, fetchData, getMovies } from '@/utils'

interface MovieListProps {
  activeFilters: Filter[]
  movieId: string | null
}

export async function MovieList({ activeFilters, movieId }: MovieListProps) {
  const genresFilter = activeFilters.length ? `&with_genres=${activeFilters}` : ''
  const url = movieId ? `${API.MOVIE}/${movieId}/recommendations` : API.POPULAR.concat(genresFilter)

  const movieData = await fetchData<APIPopularResponse>({
    url,
  })

  const movies = getMovies(movieData)

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {movies.map((movie) => (
        <li key={movie.id} className="flex flex-col justify-between gap-2">
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  )
}
