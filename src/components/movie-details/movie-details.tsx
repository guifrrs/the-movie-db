import Image from 'next/image'

import { APIMovieResponse, Movie } from '@/types'
import { API, fetchData, formatDate } from '@/utils'

interface MovieDetailsProps {
  movieId: string
}

const getMovie = (movieData: APIMovieResponse) => {
  return {
    id: movieData.id,
    title: movieData.title,
    releaseDate: movieData.release_date,
    genres: movieData.genres.map((genre) => genre.name),
    runtime: movieData.runtime,
    description: movieData.overview,
    poster: movieData.poster_path,
  }
}

const getTitle = (movie: Movie) => {
  const title = movie.title
  const releaseYear = new Date(movie.releaseDate).getFullYear()

  return `${title} (${releaseYear})`
}

const formatTime = (time: number) => {
  const hours = Math.floor(time / 60)
  const minutes = time % 60

  return `${hours}h ${minutes}min`
}

export async function MovieDetails({ movieId }: MovieDetailsProps) {
  const movieDetailsData = await fetchData<APIMovieResponse>({
    url: `${API.MOVIE}/${movieId}`,
  })

  const movie = getMovie(movieDetailsData)

  return (
    <div className="flex flex-col md:flex-row md:mt-16 gap-4">
      <img
        alt={`Poster for ${movie.title}`}
        className="mx-auto rounded-lg shadow-black mb-10 grow md:w-1/3 max-w-sm max-h-full"
        src={`${API.POSTER}${movie.poster}`}
        width={300}
        height={300}
      />

      <div className="md:w-2/4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">{getTitle(movie)}</h2>

          <p className="text-lg">{formatDate(movie.releaseDate)}</p>
          <p className="text-lg">{movie.genres.join(', ')}</p>
          <p className="text-lg">{formatTime(movie.runtime)}</p>

          <h5 className="font-bold mb-4 mt-4">Sinopse</h5>
          <p className="text-gray-300 text-sm">{movie.description}</p>
        </div>
      </div>
    </div>
  )
}
