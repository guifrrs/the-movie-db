import Image from 'next/image'

import { Section } from '@/components/section'
import { APICastResponse } from '@/types'
import { API, fetchData, getCast } from '@/utils'

interface CastListProps {
  movieId: string
}

export async function CastList({ movieId }: CastListProps) {
  const castData = await fetchData<APICastResponse>({
    url: `${API.MOVIE}/${movieId}/credits`,
  })

  const cast = getCast(castData)

  if (!cast.length) {
    return null
  }

  return (
    <Section>
      <Section.Title title="Elenco original" />
      <Section.Content>
        <ul className="flex gap-4 text-black overflow-x-auto">
          {cast.map((actor) => (
            <li
              key={actor.id}
              className="border-gray-100 border-2 border-r-4 p-2 shadow-sm flex flex-col content-between">
              <div className="w-44 mb-4">
                <img
                  alt={actor.name}
                  className="rounded-lg shadow-black h-64"
                  src={`${actor.photo}`}
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h3 className="text-black text-sm font-bold leading-tight">{actor.name}</h3>
                <p className="text-stone-500 text-xs font-bold leading-none">{actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section.Content>
    </Section>
  )
}
