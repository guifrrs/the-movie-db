import Image from 'next/image'
import { API, fetchData, formatDate } from '@/utils'

export async function MovieDetails({ movieId }) {
  const movieDetails = await fetchData({
    url: `${API.MOVIE}/${movieId}`,
  })

  const getTitle = (movie: MovieDetails) => {
    const title = movie.title
    const releaseYear = new Date(movie.releaseDate).getFullYear()

    return `${title} (${releaseYear})`
  }

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 60)
    const minutes = time % 60

    return `${hours}h ${minutes}min`
  }

  return (
    <div className="flex flex-col md:flex-row md:mt-16">
      <Image
        alt={`Poster for ${movieDetails.title}`}
        className="mx-auto rounded-lg shadow-black mb-10 grow md:w-1/3 max-w-sm max-h-full"
        src={`${API.POSTER}${movieDetails.poster_path}`}
        width={200}
        height={200}
        loading="lazy"
      />

      <div className="md:w-2/3 md:ml-8">
        <h2 className="text-2xl font-bold">{getTitle(movieDetails)}</h2>

        <p className="text-lg">{formatDate(movieDetails.release_date)}</p>
        <p className="text-lg">{movieDetails.genres.join(', ')}</p>
        <p className="text-lg">{formatTime(movieDetails.runtime)}</p>

        <h5 className="font-bold mb-4 mt-4">Sinopse</h5>
        <p className="text-gray-300 text-sm">{movieDetails.description}</p>
      </div>
    </div>
  )
}
