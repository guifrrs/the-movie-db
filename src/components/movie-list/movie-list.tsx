import { fetchMovies } from '@/utils'
import { MovieItem } from '../movie-item'

export async function MovieList() {
  const movies = await fetchMovies()

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
