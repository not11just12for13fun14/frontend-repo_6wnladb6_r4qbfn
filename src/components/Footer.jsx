export default function Footer() {
  return (
    <footer id="contact" className="relative py-12 mt-16 border-t border-white/10 bg-gradient-to-b from-transparent to-purple-950/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-sm text-slate-300/90">
          <div>
            <h4 className="text-white font-semibold mb-3">NeoShop</h4>
            <p className="text-slate-400/80">Minimal, fintech-inspired accessories with a deep purple edge.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/search" className="hover:text-white">Search</a></li>
              <li><a href="/wishlist" className="hover:text-white">Wishlist</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Get updates</h4>
            <form onSubmit={(e)=>e.preventDefault()} className="flex gap-2">
              <input className="flex-1 rounded-xl bg-white/10 border border-white/10 px-3 py-2 placeholder:text-slate-400 text-white" placeholder="Email address"/>
              <button className="rounded-xl bg-white text-black px-4 py-2 font-medium">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-slate-400/80">© 2025 NeoShop. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
