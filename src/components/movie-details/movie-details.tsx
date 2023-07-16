import Image from 'next/image'

import { APIMovieResponse } from '@/types/APIMovieResponse'
import { API, fetchData, formatDate, getMovies } from '@/utils'

interface MovieDetailsProps {
  movieId: string
}

const getMovie = (movieData: APIMovieResponse) => {
  return {
    title: movieData.title,
    releaseDate: movieData.release_date,
    genres: movieData.genres.map((genre) => genre.name),
    runtime: movieData.runtime,
    description: movieData.overview,
    poster: movieData.poster_path,
  }
}

const getTitle = (movie) => {
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
    <div className="flex flex-col md:flex-row md:mt-16">
      <Image
        alt={`Poster for ${movie.title}`}
        className="mx-auto rounded-lg shadow-black mb-10 grow md:w-1/3 max-w-sm max-h-full"
        src={`${API.POSTER}${movie.poster}`}
        width={200}
        height={200}
        loading="lazy"
      />

      <div className="md:w-2/3 md:ml-8">
        <h2 className="text-2xl font-bold">{getTitle(movie)}</h2>

        <p className="text-lg">{formatDate(movie.releaseDate)}</p>
        <p className="text-lg">{movie.genres.join(', ')}</p>
        <p className="text-lg">{formatTime(movie.runtime)}</p>

        <h5 className="font-bold mb-4 mt-4">Sinopse</h5>
        <p className="text-gray-300 text-sm">{movie.description}</p>
      </div>
    </div>
  )
}
