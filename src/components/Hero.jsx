import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Modern • Minimal • Fintech
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Elevate your checkout with glassmorphic style
          </h1>
          <p className="mt-5 text-slate-200/80 text-lg">
            A selection of minimalist, premium accessories and fintech-inspired gadgets that feel like the future.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 transition">
              Shop the collection
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white px-5 py-3 font-medium backdrop-blur hover:bg-white/15 transition">
              Why NeoShop?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
