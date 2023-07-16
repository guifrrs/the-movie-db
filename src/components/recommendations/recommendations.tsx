import { MovieList, Section } from '@/components'
import { APIPopularResponse } from '@/types'
import { API, fetchData, getMovies } from '@/utils'

interface RecommendationsProps {
  movieId: string
}

export async function Recommendations({ movieId }: RecommendationsProps) {
  const recommendationsData = await fetchData<APIPopularResponse>({
    url: `${API.MOVIE}/${movieId}/recommendations`,
  })

  const recommendations = getMovies(recommendationsData)

  if (!movieId) {
    return null
  }

  return (
    <Section>
      <Section.Title title="Recomendações" />
      <Section.Content>
        <MovieList movies={recommendations} />
      </Section.Content>
    </Section>
  )
}
