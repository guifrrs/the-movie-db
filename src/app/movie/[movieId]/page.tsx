import { CastList, MovieList, Section, Trailer } from '@/components'
import { MovieDetails } from '@/components/movie-details/movie-details'

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
      <section className="flex flex-col md:items-center bg-violet-950 p-4">
        <MovieDetails movieId={movieId} />
      </section>

      <section className="flex flex-col gap-4 p-4">
        <Section>
          <Section.Title title="Elenco original" />
          <Section.Content>
            <CastList movieId={movieId} />
          </Section.Content>
        </Section>

        <Section>
          <Section.Title title="Trailer" />
          <Section.Content>
            <Trailer movieId={movieId} />
          </Section.Content>
        </Section>

        <Section>
          <Section.Title title="Recomendações" />
          <Section.Content>
            <MovieList activeFilters={[]} movieId={movieId} />
          </Section.Content>
        </Section>
      </section>
    </main>
  )
}
