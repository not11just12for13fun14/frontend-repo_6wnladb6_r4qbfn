import { useState } from 'react'

export default function SearchBar({ onSubmit, initial = '' }) {
  const [q, setQ] = useState(initial)
  return (
    <form onSubmit={(e)=>{ e.preventDefault(); onSubmit(q) }} className="flex gap-2">
      <input value={q} onChange={e=>setQ(e.target.value)} className="flex-1 rounded-xl bg-white/10 border border-white/10 px-3 py-2 placeholder:text-slate-400 text-white" placeholder="Search products..."/>
      <button className="rounded-xl bg-white text-black px-4 py-2 font-medium">Search</button>
    </form>
  )
}
