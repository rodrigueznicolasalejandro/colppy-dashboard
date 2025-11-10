import { render, screen } from '@testing-library/react'
import KpiCard from "../../components/KpiCard"

describe('KpiCard', () => {
  it('should show title and value', () => {
    render(<KpiCard title="Usuarios Activos" value="1200" />)
    
    expect(screen.getByText('Usuarios Activos')).toBeInTheDocument()
    expect(screen.getByText('1200')).toBeInTheDocument()
  })

  it('should show red text when is an alert', () => {
    render(<KpiCard title="Churn" value="6%" warning={true} />)

    const valueElement = screen.getByText('6%')

    expect(valueElement).toHaveClass('text-red-800')
  })

  it('shoud show default grey text when is not a warning', () => {
    render(<KpiCard title="Ingresos" value="$5000" warning={false} />)

    const valueElement = screen.getByText('Ingresos')
    
    expect(valueElement).toHaveClass('text-gray-600')
  })

  it('should show prefix and suffix', () => {
    render(<KpiCard title="Ingresos" value="10" warning={false} prefix={"$"} suffix={"%"} />)

    const valueElement = screen.getByText('$ 10%')
    
    expect(valueElement).toBeInTheDocument()
  })
})
