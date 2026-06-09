import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const conductorData = {
  nombre: 'Jose Eduar Urrego Herrera',
  experiencia: '15 años',
  calificacion: 5,
  descripcion: 'Conductor profesional con amplia experiencia en traslados ejecutivos y turísticos. Conduce vehículo de lujo con aire acondicionado, música ambiental y servicio de primera calidad. Disponible 24 horas.',
  foto: 'conductor.png',
  vehiculo: 'Hyundai Grand i10 Sedán',
  licencia: 'C2',
  telefono: '+57 315 5555543',
  whatsapp: '+57 3155555543',
  resenas: '500+'
}

export default function Conductor() {
  return (
    <section id="conductor" className="section-padding bg-black-dark">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary text-center mb-8 md:mb-12">Conoce a tu Conductor</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gold mb-4">
                {conductorData.foto ? (
                   <img src="/images/Conductor.png" alt={conductorData.nombre} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-6xl md:text-7xl text-gold">👤</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold font-playfair text-white mb-2 text-center">{conductorData.nombre}</h3>
              <p className="text-gold font-inter mb-2 text-center">{conductorData.experiencia} de experiencia</p>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < conductorData.calificacion ? 'text-gold fill-gold' : 'text-gray-600'}
                  />
                ))}
                <span className="text-gray-400 text-sm ml-2">({conductorData.resenas} clientes)</span>
              </div>

              <p className="text-body text-center max-w-md">{conductorData.descripcion}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 w-full max-w-md mx-auto"
            >
              <div className="card-gold">
                <h4 className="text-lg font-bold text-gold mb-2">Vehículo</h4>
                {conductorData.vehiculo ? <p className="text-gray-300">{conductorData.vehiculo}</p> : null}
              </div>

              <div className="card-gold">
                <h4 className="text-lg font-bold text-gold mb-2">Licencia</h4>
                {conductorData.licencia ? <p className="text-gray-300">{conductorData.licencia}</p> : null}
              </div>

              <div className="card-gold">
                <h4 className="text-lg font-bold text-gold mb-2">Teléfono</h4>
                {conductorData.telefono ? (
                  <a href={`tel:${conductorData.telefono}`} className="text-gray-300 hover:text-gold transition-colors">
                    {conductorData.telefono}
                  </a>
                ) : null}
              </div>

              <div className="card-gold">
                <h4 className="text-lg font-bold text-gold mb-2">WhatsApp</h4>
                {conductorData.whatsapp ? (
                  <a
                    href={`https://wa.me/${conductorData.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {conductorData.whatsapp}
                  </a>
                ) : null}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
