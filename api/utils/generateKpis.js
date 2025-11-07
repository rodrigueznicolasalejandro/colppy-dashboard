export default function generateKpis() {
    return {
        activeUsers: Math.floor(800 + Math.random() * 400),
        revenue: Number((5000 + Math.random() * 3000).toFixed(2)),
        churn: Number((2 + Math.random() * 6).toFixed(2))
    }
}