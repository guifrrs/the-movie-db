import { Movie } from '@/types'
import { render, screen } from '@testing-library/react'
import { MovieItem } from './movie-item'

const defaultProps: Movie = {
  id: 1,
  title: 'Some title',
  poster: '/poster.jpg',
  releaseDate: '2021-05-22 00:00:00',
}

describe('MovieItem', () => {
  it('render the movie item', () => {
    const { container } = render(<MovieItem movie={defaultProps} />)

    expect(screen.getByText(/some title/i)).toBeInTheDocument()
    expect(screen.getByText(/may 22, 2021/i)).toBeInTheDocument()
    expect(screen.getByAltText(/poster for some title/i)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
