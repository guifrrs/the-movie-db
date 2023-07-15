import { APIResponse, Movie, Filter } from "@/types"
import { API } from ".."

const API_KEY = process.env.API_KEY

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

export async function fetchMovies(activeFilters: Filter[]): Promise<Movie[]> {
  const genresFilter = activeFilters.length ? `&with_genres=${activeFilters}` : ''
  const res = await fetch(`${API.POPULAR.concat(genresFilter)}`, options)

  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }

  const data: APIResponse = await res.json()
  const movies = data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    releaseDate: movie.release_date,
  }))

  return movies
}