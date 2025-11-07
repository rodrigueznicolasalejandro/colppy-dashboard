export async function fetchMetrics() {
  const res = await fetch('http://localhost:4000/metrics')
  if (!res.ok) throw new Error('API error')
  return res.json()
}

export async function fetchKpis() {
  const res = await fetch('http://localhost:4000/kpis')
  if (!res.ok) throw new Error('API error')
  return res.json()
}
