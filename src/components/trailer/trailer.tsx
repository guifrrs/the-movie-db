import { Section } from '@/components'
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

  if (!trailer) {
    return null
  }

  const srcDocContent = `<style>*{padding:0;margin:0;overflow:hidden}<html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${trailer.key}?autoplay=1><img src=https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg alt="${trailer.name}" /></a>`

  return (
    <Section>
      <Section.Title title="Trailer" />
      <Section.Content>
        <div className="aspect-w-16 aspect-h-9 max-w-7xl sm:h-[30rem]">
          <iframe
            className="w-full h-full"
            title={trailer.name}
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
            srcDoc={srcDocContent}></iframe>
        </div>
      </Section.Content>
    </Section>
  )
}
