import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Conductor from '@/components/Conductor'
import Tarifas from '@/components/Tarifas'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Conductor />
        <Tarifas />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
