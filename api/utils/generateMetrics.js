export default function generateMetrics(results) {
  const now = Date.now()

  const series = Array.from({ length: results }).map((_, i) => ({
    ts: new Date(now - (results - 1 - i) * 24 * 60 * 60 * 1000).toISOString(),
    activeUsers: Math.floor(Math.random() * 600)
  }))

  return { series }
}