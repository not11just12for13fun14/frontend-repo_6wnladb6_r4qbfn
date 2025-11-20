import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../context/Store'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductDetail() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [loading, setLoading] = useState(true)
  const { api } = useStore()

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${BACKEND}/api/products/${id}`)
        const data = await res.json()
        setP(data)
      } finally { setLoading(false) }
    }
    run()
  }, [id])

  if (loading) return <div className="py-20 text-center">Loading…</div>
  if (!p) return <div className="py-20 text-center">Not found</div>

  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            {p.image && <img src={p.image} alt={p.title} className="w-full rounded-xl object-cover" />}
            {Array.isArray(p.gallery) && p.gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {p.gallery.slice(0,4).map((g, i) => (
                  <img key={i} src={g} alt="" className="h-20 w-full object-cover rounded-lg" />
                ))}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{p.title}</h1>
            <p className="mt-2 text-slate-300/80">{p.description}</p>
            <div className="mt-4 text-2xl font-semibold">${p.price}</div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => api.addToCart(p, 1)} className="rounded-xl bg-white text-black px-5 py-3 font-medium">Add to cart</button>
              <a href="/cart" className="rounded-xl border border-white/20 bg-white/10 px-5 py-3">Go to cart</a>
            </div>
            {p.specs && (
              <div className="mt-8">
                <h3 className="font-medium">Specifications</h3>
                <ul className="mt-2 text-slate-300/80 space-y-1">
                  {Object.entries(p.specs).map(([k,v]) => (
                    <li key={k}><span className="text-slate-400">{k}:</span> {String(v)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
