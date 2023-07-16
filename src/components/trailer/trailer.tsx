import { APIVideoResponse } from '@/types'
import { API, fetchData, getTrailer } from '@/utils'

interface TrailerProps {
  movieId: string
}

export async function Trailer({ movieId }: TrailerProps) {
  const trailerData = await fetchData<APIVideoResponse>({
    url: `${API.MOVIE}/${movieId}/videos`,
  })

  const trailer = getTrailer(trailerData)

  return (
    <div>
      <iframe className="w-full h-80" title="trailer" src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
    </div>
  )
}
