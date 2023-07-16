const API_KEY = process.env.API_KEY

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

interface FetchDataParams {
  url: string
}

export async function fetchData<T>({ url }: FetchDataParams): Promise<T> {
  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  return data as T
}