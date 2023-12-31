import { APIPopularResponse } from "@/types";

export function getMovies({ results }: APIPopularResponse) {
  return results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    releaseDate: movie.release_date,
  }))
}