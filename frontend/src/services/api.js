const API_URL = import.meta.env.VITE_API_URL

export async function fetchMetrics(days = 30) {
  const res = await fetch(`${API_URL}/metrics?days=${days}`)
  if (!res.ok) throw new Error('API error')
  return res.json()
}

export async function fetchKpis() {
  const res = await fetch(`${API_URL}/kpis`)
  if (!res.ok) throw new Error('API error')
  return res.json()
}
