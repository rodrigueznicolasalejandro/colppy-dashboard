export default function generateMetrics(results) {
  const now = Date.now()

  const series = Array.from({ length: results }).map((_, i) => ({
    ts: now - (11 - i) * 5000,
    activeUsers: Math.floor(600 + Math.random() * 600),
    revenue: Number((4000 + Math.random() * 4000).toFixed(2)),
    churn: Number((1 + Math.random() * 7).toFixed(2))
  }))

  return { series }
}