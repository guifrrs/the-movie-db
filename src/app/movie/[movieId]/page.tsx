import type { Metadata } from 'next'

import { CastList, MovieDetails, Recommendations, Trailer } from '@/components'
import { APIMovieResponse } from '@/types'
import { API, fetchData } from '@/utils'

interface RouteProps {
  params: {
    movieId: string
  }
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { movieId } = params

  const movie = await fetchData<APIMovieResponse>({
    url: `${API.MOVIE}/${movieId}}`,
  })

  const title = movie.title

  return {
    title: `TMDB - ${title}`,
    description: `Details for ${title}`,
  }
}

export default function Movie({ params }: RouteProps) {
  const { movieId } = params

  return (
    <main className="min-h-screen bg-white text-white">
      <section className="bg-violet-950 p-4">
        <MovieDetails movieId={movieId} />
      </section>

      <section className="flex flex-col gap-4 p-4">
        <CastList movieId={movieId} />
        <Trailer movieId={movieId} />
        <Recommendations movieId={movieId} />
      </section>
    </main>
  )
}
