export const API = {
  POPULAR: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc',
  POSTER: 'https://image.tmdb.org/t/p/w500',
}

export const FILTERS_LABELS = [
  'Ação',
  'Aventura',
  'Animação',
  'Comédia',
  'Crime',
  'Documentário',
  'Drama',
  'Família',
  'Fantasia',
  'História',
  'Terror',
  'Música',
  'Mistério',
  'Romance',
  'Ficção científica',
  'Cinema TV',
  'Thriller',
  'Guerra',
  'Faroeste',
] as const

export const FILTERS = {
  ACTION: '28',
  ADVENTURE: '12',
  ANIMATION: '16',
  COMEDY: '35',
  CRIME: '80',
  DOCUMENTARY: '99',
  DRAMA: '18',
  FAMILY: '10751',
  FANTASY: '14',
  HISTORY: '36',
  HORROR: '27',
  MUSIC: '10402',
  MYSTERY: '9648',
  ROMANCE: '10749',
  SCIENCE_FICTION: '878',
  TV_MOVIE: '10770',
  THRILLER: '53',
  WAR: '10752',
  WESTERN: '37',
} as const

export const FILTERS_VALUES = Object.values(FILTERS) as (typeof FILTERS)[keyof typeof FILTERS][]

export const FILTERS_OPTIONS = FILTERS_LABELS.map((label, index) => ({
  label,
  value: FILTERS_VALUES[index],
}))


