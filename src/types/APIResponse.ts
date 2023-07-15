export interface APIResponse {
  page: number
  results: {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
  }[]
  total_pages: number
  total_results: number
}