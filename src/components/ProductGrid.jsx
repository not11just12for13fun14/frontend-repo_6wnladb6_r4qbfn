import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${BACKEND}/api/products`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Featured products</h2>
          <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">View all</a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-56 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((p) => (
              <article key={p.id} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl hover:bg-white/10 transition">
                {p.image && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-white font-medium tracking-tight line-clamp-1">{p.title}</h3>
                  <p className="text-slate-300/70 text-sm line-clamp-2 mt-1">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-white font-semibold">${'{'}p.price{'}'}</span>
                    <button className="rounded-lg bg-white/10 text-white px-3 py-1.5 border border-white/10 hover:bg-white/15 text-sm">Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
