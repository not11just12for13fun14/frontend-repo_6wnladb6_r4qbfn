import { useStore } from '../context/Store'

export default function Cart() {
  const { state, api } = useStore()
  const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
        {state.cart.length === 0 ? (
          <p className="text-slate-300/80 mt-4">Your cart is empty.</p>
        ) : (
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {state.cart.map(item => (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-4">
                  {item.image && <img src={item.image} alt={item.title} className="h-20 w-24 rounded-xl object-cover" />}
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-slate-300/80 text-sm">${item.price.toFixed(2)}</p>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <button onClick={() => api.updateQty(item.id, Math.max(1, item.qty - 1))} className="px-2 py-1 rounded-lg bg-white/10">-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => api.updateQty(item.id, item.qty + 1)} className="px-2 py-1 rounded-lg bg-white/10">+</button>
                    </div>
                  </div>
                  <button onClick={() => api.removeFromCart(item.id)} className="text-sm text-red-300 hover:text-red-200">Remove</button>
                </div>
              ))}
            </div>
            <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit">
              <div className="flex items-center justify-between">
                <span className="text-slate-300/80">Subtotal</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <a href="/checkout" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white text-black px-4 py-2 font-medium hover:bg-white/90">Proceed to checkout</a>
              <button onClick={() => api.clearCart()} className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2">Clear cart</button>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
