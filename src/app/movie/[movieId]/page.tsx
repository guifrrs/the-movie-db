import { CastList, MovieDetails, Recommendations, Trailer } from '@/components'

export default function Movie({
  params,
}: {
  params: {
    movieId: string
  }
}) {
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
