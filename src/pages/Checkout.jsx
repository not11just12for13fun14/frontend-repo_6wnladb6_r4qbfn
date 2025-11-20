import { useState } from 'react'
import { useStore } from '../context/Store'

export default function Checkout() {
  const { state, api } = useStore()
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', payment_method: 'COD' })
  const [status, setStatus] = useState(null)
  const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0)

  const submit = async (e) => {
    e.preventDefault()
    const res = await api.checkout({ ...form })
    setStatus(res)
    if (res.ok) {
      alert('Order placed successfully!')
    }
  }

  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Full name</label>
              <input required value={form.name} onChange={e=>setForm(f=>({ ...f, name: e.target.value }))} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white"/>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" value={form.email} onChange={e=>setForm(f=>({ ...f, email: e.target.value }))} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Phone</label>
                <input value={form.phone} onChange={e=>setForm(f=>({ ...f, phone: e.target.value }))} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white"/>
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Address</label>
              <textarea required value={form.address} onChange={e=>setForm(f=>({ ...f, address: e.target.value }))} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white" rows={4}/>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Payment</label>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="payment" checked readOnly />
                  <span>Cash on Delivery (only)</span>
                </label>
              </div>
            </div>
            <button className="rounded-xl bg-white text-black px-5 py-3 font-medium">Place order</button>
            {status && (
              <p className="text-slate-300/80 text-sm">Status: {status.status} • ID: {status.order_id}</p>
            )}
          </form>
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit">
            <h3 className="font-medium">Order summary</h3>
            <div className="mt-3 space-y-3">
              {state.cart.map(item => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="text-slate-300/80">{item.title} × {item.qty}</span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-slate-300/80">Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
