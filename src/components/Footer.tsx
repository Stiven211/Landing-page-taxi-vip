import { motion } from 'framer-motion'

const footerData = {
  copyright: '© 2026. Todos los derechos reservados.',
  telefono: '+57 315 5555543',
  whatsapp: '57 3155555543',
  nombre: 'Jose Eduar Urrego Herrera',
  servicio: 'Servicio de Taxi VIP - San José del Guaviare'
}

export default function Footer() {
  return (
    <footer className="bg-black-dark border-t border-gold py-6 md:py-8">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <p className="text-gold font-bold text-lg font-playfair">{footerData.nombre}</p>
          <p className="text-gray-400 text-sm">{footerData.servicio}</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
            <a
              href={`tel:${footerData.telefono}`}
              className="text-gray-300 hover:text-gold transition-colors"
            >
              {footerData.telefono}
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a
              href={`https://wa.me/${footerData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            {footerData.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
