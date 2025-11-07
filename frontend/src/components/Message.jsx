export default function Message({error}) {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="p-3 rounded-lg bg-red-100 text-red-800">{error}</div>
        </section>
    )
}