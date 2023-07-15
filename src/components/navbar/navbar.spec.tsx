import { render, screen } from '@testing-library/react'

import { Navbar } from './navbar'

describe('Navbar', () => {
  it('render successfuly', () => {
    render(<Navbar />)

    expect(screen.getByAltText('TMDB logo')).toBeInTheDocument()
  })
})
