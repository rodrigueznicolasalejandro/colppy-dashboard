export async function fetchMetrics() {
  const res = await fetch('https://colppy-dashboard-gn8g.vercel.app/metrics')
  if (!res.ok) throw new Error('API error')
  return res.json()
}

export async function fetchKpis() {
  const res = await fetch('https://colppy-dashboard-gn8g.vercel.app/kpis')
  if (!res.ok) throw new Error('API error')
  return res.json()
}
