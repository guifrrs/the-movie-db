import { APIVideoResponse } from '@/types/APIVideoResponse'

export function getTrailer({ results }: APIVideoResponse) {
  return results
    .map((video) => ({
      official: video.official,
      type: video.type,
      key: video.key,
    }))
    .filter((video) => video.official && video.type === 'Trailer')[0]
}
