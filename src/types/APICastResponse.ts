export type APICastResponse = {
  id: number
  cast: {
    id: number,
    name: string,
    profile_path: string,
    character: string,
  }[]
  crew: {
    id: number,
    name: string,
    profile_path: string,
    job: string,
  }[]
}