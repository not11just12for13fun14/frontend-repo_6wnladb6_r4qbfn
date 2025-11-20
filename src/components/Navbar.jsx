import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 h-16">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-inner" />
              <span className="text-white text-lg font-semibold tracking-tight">NeoShop</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-slate-200/80 hover:text-white transition">Products</a>
              <a href="#features" className="text-slate-200/80 hover:text-white transition">Features</a>
              <a href="#contact" className="text-slate-200/80 hover:text-white transition">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 text-slate-200/80 hover:text-white transition">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-3 py-2 border border-white/10 hover:bg-white/15 transition">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Cart</span>
              </button>
              <button className="md:hidden text-white/80 hover:text-white" onClick={() => setOpen(v => !v)}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                <a href="#products" className="text-slate-200/90">Products</a>
                <a href="#features" className="text-slate-200/90">Features</a>
                <a href="#contact" className="text-slate-200/90">Contact</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
