import Link from 'next/link'
import Image from 'next/image'
import { API, formatDate } from '@/utils'
import { Movie } from '@/types'

interface MovieItemProps {
  movie: Movie
}

export function MovieItem({ movie }: MovieItemProps) {
  const { title, poster, releaseDate } = movie
  const moviePoster = API.POSTER.concat(poster)

  return (
    <>
      <Link href="/">
        <Image src={`${moviePoster}`} alt={`Poster for ${title}`} className="mb-3" width={300} height={300} />
      </Link>

      <h3 className="text-black text-sm font-bold leading-tight">{title}</h3>
      <p className="text-stone-500 text-xs font-bold leading-none">{formatDate(releaseDate)}</p>
    </>
  )
}
