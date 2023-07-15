import { FilterList } from '@/components/filter-list/filter-list'
import { MovieList } from '@/components/movie-list/movie-list'
import { getActiveFilters } from '@/utils/get-active-filters'

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Home({ searchParams }: HomeProps) {
  const activeFilters = getActiveFilters(searchParams)

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="flex flex-col md:items-center bg-violet-950 p-4">
        <h4 className="mb-8 font-bold text-2xl text-white">
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </h4>

        <p className="uppercase font-bold text-sm text-white">Filtre por:</p>

        <FilterList activeFilters={activeFilters} />
      </section>

      <section className="p-4">
        <MovieList activeFilters={activeFilters} />
      </section>
    </main>
  )
}
