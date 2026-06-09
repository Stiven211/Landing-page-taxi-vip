import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'

const heroData = {
  titulo: 'Servicio de Taxi Vip',
  subtitulo: 'Transporte profesional y confiable en San José del Guaviare',
  whatsappNumber: '573155555543',
  phoneNumber: '573155555543',
  imagenUrl: ''
}

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Buenos días'
  if (hour >= 12 && hour < 18) return 'Buenas tardes'
  return 'Buenas noches'
}

const isAvailable = () => {
  const hour = new Date().getHours()
  return hour >= 5 && hour < 23
}

export default function Hero() {
  const [greeting, setGreeting] = useState(getGreeting())
  const [available, setAvailable] = useState(isAvailable())

  useEffect(() => {
    const updateGreeting = () => {
      setGreeting(getGreeting())
      setAvailable(isAvailable())
    }
    updateGreeting()
    const interval = setInterval(updateGreeting, 3600000)
    return () => clearInterval(interval)
  }, [])

  const handleWhatsApp = () => {
    const phoneNumber = heroData.whatsappNumber
    const message = `${greeting}, me gustaría solicitar un servicio de taxi en San José del Guaviare.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${heroData.phoneNumber}`
  }

  return (
    <section className="pt-20 pb-12 bg-black-dark">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <p className="text-gold font-inter text-lg mb-2">{greeting}</p>
              <h1 className="heading-primary mb-4">{heroData.titulo}</h1>
              <p className="text-body max-w-lg">{heroData.subtitulo}</p>
            </div>

            {!available && (
              <p className="text-sm text-gray-400">
                Disponible nuevamente a las 5:00 AM
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gold"
                onClick={handleWhatsApp}
                disabled={!available || !heroData.whatsappNumber}
                className="w-full sm:w-auto"
              >
                WhatsApp
              </Button>
              <Button
                variant="outline-gold"
                onClick={handleCall}
                disabled={!available || !heroData.phoneNumber}
                className="w-full sm:w-auto"
              >
                Llamar
              </Button>
            </div>

            <div className="pt-2">
              <p className="text-gray-400 text-sm">
                José Eduar Urrego Herrera
              </p>
              <a
                href="https://wa.me/573155555543"
                className="text-gold hover:text-gold-light transition-colors font-medium"
              >
                +57 315 5555543
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <img src="/images/veiculo-por-delante.jpg" alt="Vehículo Taxi VIP - Frente" className="w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Frente</span>
              </div>
              <div className="relative aspect-square">
                <img src="/images/veiculo-por-detras.jpg" alt="Vehículo Taxi VIP - Atrás" className="w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Atrás</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
