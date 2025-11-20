export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-300/80 text-sm">© 2025 NeoShop. All rights reserved.</p>
            <nav className="flex items-center gap-6 text-sm text-slate-200/80">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Support</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
