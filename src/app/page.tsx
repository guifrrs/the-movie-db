import { MovieList } from '@/components/movie-list/movie-list'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <MovieList />
    </main>
  )
}
