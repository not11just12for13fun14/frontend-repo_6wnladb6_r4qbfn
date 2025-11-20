import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background aesthetics */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-100px,rgba(56,189,248,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(59,130,246,0.10),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
