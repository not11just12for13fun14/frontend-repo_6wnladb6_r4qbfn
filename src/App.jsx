import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_500px_at_50%_-100px,rgba(147,51,234,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(168,85,247,0.10),transparent)]" />
      </div>

      <Navbar />
      <main className="pt-24">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
