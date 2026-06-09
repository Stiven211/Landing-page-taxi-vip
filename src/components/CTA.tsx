import { motion } from 'framer-motion'
import { Button } from './ui/Button'

const heroData = {
  whatsappNumber: '573155555543',
  phoneNumber: '573155555543'
}

const isAvailable = () => {
  const hour = new Date().getHours()
  return hour >= 5 && hour < 23
}

export default function CTA() {
  const handleWhatsApp = () => {
    const phoneNumber = heroData.whatsappNumber
    const message = 'Hola, me gustaría solicitar un servicio de taxi.'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${heroData.phoneNumber}`
  }

  return (
    <section id="contacto" className="section-padding bg-gradient-to-r from-black-dark to-black-light">
      <div className="container-responsive text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary mb-4">¿Listo para tu viaje?</h2>
          <p className="text-body mb-6 md:mb-8 max-w-xl mx-auto">
            Servicio premium de taxi en San José del Guaviare. Reserva ahora y disfruta del mejor traslado.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button
              variant="gold"
              onClick={handleWhatsApp}
              disabled={!isAvailable() || !heroData.whatsappNumber}
              className="w-full sm:w-auto"
            >
              WhatsApp
            </Button>
            <Button
              variant="outline-gold"
              onClick={handleCall}
              disabled={!isAvailable() || !heroData.phoneNumber}
              className="w-full sm:w-auto"
            >
              Llamar
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-1">Jose Eduar Urrego Herrera</p>
            <a href="tel:573155555543" className="text-gold hover:text-gold-light transition-colors font-bold text-lg">
              +57 315 5555543
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
