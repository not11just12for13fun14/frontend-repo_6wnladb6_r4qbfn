import { useStore } from '../context/Store'

export default function Wishlist() {
  const { state, api } = useStore()

  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Wishlist</h1>
        {state.wishlist.length === 0 ? (
          <p className="text-slate-300/80 mt-4">Your wishlist is empty.</p>
        ) : (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {state.wishlist.map(id => (
              <div key={id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300/80">Saved item</p>
                <button onClick={() => api.toggleWishlist(id)} className="mt-3 text-purple-300 hover:text-purple-200">Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
