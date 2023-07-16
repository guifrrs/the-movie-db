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
    <div className="aspect-w-16 aspect-h-9 max-w-7xl sm:h-[30rem]">
      <iframe className="w-full h-full" title="trailer" src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
    </div>
  )
}
