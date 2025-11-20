import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const [q, setQ] = useState(params.get('q') || '')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const query = params.get('q') || ''
    setQ(query)
    const run = async () => {
      if (!query) { setItems([]); return }
      setLoading(true)
      try {
        const res = await fetch(`${BACKEND}/api/products?q=${encodeURIComponent(query)}`)
        const data = await res.json()
        setItems(data.items || [])
      } finally { setLoading(false) }
    }
    run()
  }, [params])

  const onSubmit = (e) => {
    e.preventDefault()
    setParams(q ? { q } : {})
  }

  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Search</h1>
        <form onSubmit={onSubmit} className="mt-4 flex gap-2">
          <input value={q} onChange={e=>setQ(e.target.value)} className="flex-1 rounded-xl bg-white/10 border border-white/10 px-3 py-2 placeholder:text-slate-400 text-white" placeholder="Search products..."/>
          <button className="rounded-xl bg-white text-black px-4 py-2 font-medium">Search</button>
        </form>

        {loading ? (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-56 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map(p => (
              <a key={p.id} href={`/product/${p.id}`} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl hover:bg-white/10 transition">
                {p.image && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-white font-medium tracking-tight line-clamp-1">{p.title}</h3>
                  <p className="text-slate-300/70 text-sm line-clamp-2 mt-1">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-white font-semibold">${p.price}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
