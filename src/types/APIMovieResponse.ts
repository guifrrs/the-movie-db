export type APIMovieResponse = {
  id: number
  title: string
  poster_path: string
  release_date: string
  genres: {
    id: number
    name: string
  }[]
  overview: string
  runtime: number
  vote_average: number
  vote_count: number
  credits: {
    cast: {
      id: number
      name: string
      profile_path: string
      character: string
    }[]
    crew: {
      id: number
      name: string
      profile_path: string
      job: string
    }[]
  }
  videos: {
    results: {
      id: string
      key: string
      name: string
      site: string
      type: string
    }[]
  }
}