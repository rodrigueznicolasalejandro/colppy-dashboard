import { render, screen } from '@testing-library/react'
import Loading from '../../components/Loading'

describe('Loading', () => {
  it('should show the message Loading...', () => {
    render(<Loading />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should have specific class names', () => {
    render(<Loading />)
    const wrapper = screen.getByText('Loading...').parentElement
    expect(wrapper).toHaveClass('flex')
    expect(wrapper).toHaveClass('justify-center')
    expect(wrapper).toHaveClass('items-center')
  })
})
