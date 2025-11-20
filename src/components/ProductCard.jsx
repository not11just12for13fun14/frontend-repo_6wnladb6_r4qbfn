import { useStore } from '../context/Store'

export default function ProductCard({ p }) {
  const { api, state } = useStore()
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl hover:bg-white/10 transition">
      {p.image && (
        <a href={`/product/${p.id}`} className="aspect-[4/3] overflow-hidden block">
          <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
        </a>
      )}
      <div className="p-4">
        <a href={`/product/${p.id}`} className="text-white font-medium tracking-tight line-clamp-1 hover:underline">{p.title}</a>
        <p className="text-slate-300/70 text-sm line-clamp-2 mt-1">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-white font-semibold">${p.price}</span>
          <div className="flex gap-2">
            <button onClick={() => api.addToCart(p, 1)} className="rounded-lg bg-white text-black px-3 py-1.5 text-sm">Add</button>
            <button onClick={() => api.toggleWishlist(p.id)} className={`rounded-lg px-3 py-1.5 text-sm border border-white/10 ${state.wishlist.includes(p.id) ? 'bg-purple-600/60' : 'bg-white/10'} `}>Wish</button>
          </div>
        </div>
      </div>
    </article>
  )
}
