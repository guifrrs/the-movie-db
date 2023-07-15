import { render, screen } from '@testing-library/react'
import { CloseIcon } from './close-icon'

describe('CloseIcon', () => {
  it('should render successfully', () => {
    render(<CloseIcon />)

    expect(screen.getByAltText('Close icon')).toBeInTheDocument()
  })
})
