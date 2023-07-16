import { MovieItem } from '@/components'
import { Movie } from '@/types'

interface MovieListProps {
  movies: Movie[]
}

export async function MovieList({ movies }: MovieListProps) {
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
