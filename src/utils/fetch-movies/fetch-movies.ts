import { APIResponse, Movie } from "@/types"
import { API } from ".."

const API_KEY = process.env.API_KEY

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

export async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(API.POPULAR, options)

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