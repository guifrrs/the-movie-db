import { Movie } from '@/types'

interface MovieItemProps {
  movie: Movie
}

export function MovieItem({ movie }: MovieItemProps) {
  const { title } = movie

  return <h3>{title}</h3>
}
