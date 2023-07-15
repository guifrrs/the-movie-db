import Image from 'next/image'
import Link from 'next/link'

import { Movie } from '@/types'
import { API, formatDate } from '@/utils'

interface MovieItemProps {
  movie: Movie
}

export function MovieItem({ movie }: MovieItemProps) {
  const { title, poster, releaseDate } = movie
  const moviePoster = API.POSTER.concat(poster)

  return (
    <>
      <Link href="/">
        <Image src={`${moviePoster}`} alt={`Poster for ${title}`} className="mb-3" width={500} height={500} />
      </Link>

      <h3 className="text-black text-sm font-bold leading-tight">{title}</h3>
      <p className="text-stone-500 text-xs font-bold leading-none">{formatDate(releaseDate)}</p>
    </>
  )
}
