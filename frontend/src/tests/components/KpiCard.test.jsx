import { render, screen } from '@testing-library/react'
import KpiCard from "../../components/KpiCard"

// Agrupamos las pruebas en un describe
describe('KpiCard', () => {
  it('muestra el título y el valor correctamente', () => {
    render(<KpiCard title="Usuarios Activos" value="1200" />)
    
    // Verifica que el título y el valor estén en pantalla
    expect(screen.getByText('Usuarios Activos')).toBeInTheDocument()
    expect(screen.getByText('1200')).toBeInTheDocument()
  })

  it('usa estilos de alerta cuando warning es true', () => {
    render(<KpiCard title="Churn" value="6%" warning={true} />)

    // Busca el elemento con el valor
    const valueElement = screen.getByText('6%')

    // Comprueba que tenga la clase de alerta
    expect(valueElement).toHaveClass('text-brand-alert')
  })

  it('usa estilos normales cuando warning es false', () => {
    render(<KpiCard title="Ingresos" value="$5000" warning={false} />)

    const valueElement = screen.getByText('$5000')
    expect(valueElement).toHaveClass('text-brand-primary')
  })
})
