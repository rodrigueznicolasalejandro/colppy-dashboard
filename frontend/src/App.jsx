import React, { useCallback, useMemo, useState } from 'react'

import KpiCard from './components/KpiCard'
import LineChart from './components/LineChart'
import Loading from './components/Loading'
import Message from './components/Message'

import usePolling from './hooks/usePolling'
import { fetchMetrics, fetchKpis } from './services/api'

export default function App() {
  const [kpis, setKpis] = useState({ activeUsers: 0, revenue: 0, churn: 0 })
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const update = useCallback(async () => { // Deja en meomria la función para que no se vuelva a crear en cada render
    setError(null)
    try {
      const { series: newSeries } = await fetchMetrics()
      const { kpis: newKpis } = await fetchKpis()
      setKpis(newKpis)
      setSeries(newSeries)
      setLoading(false)
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }, [])

  usePolling(update, 5000)

  const churnWarning = useMemo(() => kpis.churn > 5, [kpis.churn])
  const seriesForChart = useMemo(() => series.map(s => ({ ...s, ts: new Date(s.ts).toLocaleTimeString() })), [series])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="colppy-primary mx-auto">
        <div className="max-w-6xl mx-auto flex items-center pt-6 pb-6">
          <img src="https://colppy.com/hubfs/Sistema%20de%20gesti%C3%B3n%20contable.svg" height="25" width="120" alt="Sistema de gestión contable" title="Sistema de gestión contable" />        
        </div>
      </header>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center pt-12 pb-10 text-6xl">Dashboard Analítico</h1>
        <div className="line-divider"></div>
        <p className="pt-3 pb-3">Actualización en tiempo real (cada 5s)</p>
      </div>
      <main className="max-w-6xl mx-auto grid gap-4">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <KpiCard title="Usuarios activos" value={kpis.activeUsers} />
          <KpiCard title="Ingresos (USD)" value={kpis.revenue.toFixed(2)} prefix="$" />
          <KpiCard title="Churn (%)" value={kpis.churn.toFixed(2)} suffix="%" warning={churnWarning} />
        </section>
        <section className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Evolución (últimos puntos)</h2>
            <div className="text-sm text-gray-500">Última actualización: {seriesForChart.length ? seriesForChart[seriesForChart.length - 1].ts : '-'}</div>
          </div>
          { loading && <Loading/> }
          { error && <div className="text-red-500">Error: {error}</div> }
          { !loading && !error && <LineChart data={seriesForChart} dataKey="activeUsers" labelFormatter={t => t} /> }
        </section>
        { churnWarning && <Message error="Alerta: churn por encima del 5%." /> }
      </main>
    </div>
  )
}
