import { render, screen } from '@testing-library/react'
import Message from '../../components/Message'

describe('Message', () => {
  it('should show the error message', () => {
    render(<Message error="Hubo un error inesperado" />)
    expect(screen.getByText('Hubo un error inesperado')).toBeInTheDocument()
  })

  it('should have specific class names', () => {
    render(<Message error="Error de red" />)
    const div = screen.getByText('Error de red')
    expect(div).toHaveClass('bg-red-100')
    expect(div).toHaveClass('text-red-800')
  })
})
