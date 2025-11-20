import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../context/Store'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Product() {
  const { id } = useParams()
  const { api } = useStore()
  const [item, setItem] = useState(null)

  useEffect(() => {
    // For demo, fetch all and find
    const load = async () => {
      const res = await fetch(`${BACKEND}/api/products`)
      const data = await res.json()
      const found = (data.items || []).find(p => p.id === id)
      setItem(found || null)
    }
    load()
  }, [id])

  if (!item) return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">Loading...</div>

  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {item.image && <img src={item.image} alt={item.title} className="w-full h-full object-cover" />}
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>
          <p className="text-slate-300/80 mt-2">{item.description}</p>
          <p className="mt-4 text-2xl font-semibold">${item.price}</p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => api.addToCart(item)} className="rounded-xl bg-purple-600 px-5 py-3">Add to cart</button>
            <a href="/cart" className="rounded-xl border border-white/20 bg-white/10 px-5 py-3">Go to cart</a>
          </div>
        </div>
      </div>
    </section>
  )
}
