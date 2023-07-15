import { MovieItem } from '@/components'
import { Filter } from '@/types'
import { fetchMovies } from '@/utils'

interface MovieListProps {
  activeFilters: Filter[]
}

export async function MovieList({ activeFilters }: MovieListProps) {
  const movies = await fetchMovies(activeFilters)

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  )
}
