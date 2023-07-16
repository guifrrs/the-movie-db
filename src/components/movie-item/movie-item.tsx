import Image from 'next/image'
import Link from 'next/link'

import { Movie } from '@/types'
import { API, formatDate } from '@/utils'

interface MovieItemProps {
  movie: Movie
}

export function MovieItem({ movie }: MovieItemProps) {
  const { id, title, poster, releaseDate } = movie
  const moviePoster = API.POSTER.concat(poster)
  // const moviePoster = ''

  return (
    <>
      <Link href={`/movie/${id}`}>
        <img
          src={`${moviePoster}`}
          alt={`Poster for ${title}`}
          width={300}
          height={450}
          className="min-h-full max-h-full"
        />
      </Link>

      <div className="w-full">
        <h3 className="text-black text-sm font-bold leading-tight">{title}</h3>
        <p className="text-stone-500 text-xs font-bold leading-none">{formatDate(releaseDate)}</p>
      </div>
    </>
  )
}
