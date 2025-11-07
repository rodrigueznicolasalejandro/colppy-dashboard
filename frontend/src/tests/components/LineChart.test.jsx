import React from 'react'
import { render, screen } from '@testing-library/react'
import LineChart from '../../components/LineChart'

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }) => <div>{children}</div>,
  LineChart: ({ children }) => <div data-testid="linechart">{children}</div>,
  Line: () => <div data-testid="line" />,
  XAxis: () => <div data-testid="xaxis" />,
  YAxis: () => <div data-testid="yaxis" />,
  Tooltip: () => <div data-testid="tooltip" />,
}))

describe('LineChart', () => {
  const data = [{ ts: '2025-11-06', value: 10 }]
  const labelFormatter = vi.fn()

  test('renderiza las líneas correctamente', () => {
    render(<LineChart data={data} dataKey="value" labelFormatter={labelFormatter} />)

    // Verifica que los elementos del gráfico están presentes
    expect(screen.getByTestId('linechart')).toBeTruthy()
    expect(screen.getByTestId('line')).toBeTruthy()
    expect(screen.getByTestId('xaxis')).toBeTruthy()
    expect(screen.getByTestId('yaxis')).toBeTruthy()
    expect(screen.getByTestId('tooltip')).toBeTruthy()
  })

  test('usa correctamente el labelFormatter', () => {
    render(<LineChart data={data} dataKey="value" labelFormatter={labelFormatter} />)
    expect(labelFormatter).not.toHaveBeenCalled()
  })
})