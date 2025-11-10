import { render, screen, fireEvent } from '@testing-library/react'

import DateRangeFilter from '../../components/DateRangeFilter'
import { useFilter } from '../../context/FilterContext'

vi.mock('../../context/FilterContext', () => ({
  useFilter: vi.fn()
}))

describe('DateRangeFilter', () => {
  const setDays = vi.fn()
  const resetFilter = vi.fn()

  beforeEach(() => {
    useFilter.mockReturnValue({
      days: 30,
      setDays,
      resetFilter
    })
  })

  it('should show the three filters (30, 60 y 90 días)', () => {
    render(<DateRangeFilter />)
    expect(screen.getByText('30 días')).toBeInTheDocument()
    expect(screen.getByText('60 días')).toBeInTheDocument()
    expect(screen.getByText('90 días')).toBeInTheDocument()
  })

  it('should call setDays when a filter is clicked', () => {
    render(<DateRangeFilter />)
    fireEvent.click(screen.getByText('60 días'))
    expect(setDays).toHaveBeenCalledWith(60)
  })

  it('should reset the filter when the "Resetear" button is clicked', () => {
    render(<DateRangeFilter />)
    fireEvent.click(screen.getByText('Resetear'))
    expect(resetFilter).toHaveBeenCalled()
  })

  it('resalta el botón seleccionado', () => {
    render(<DateRangeFilter />)
    const selected = screen.getByText('30 días')
    expect(selected).toHaveClass('button-selected')
  })
})
