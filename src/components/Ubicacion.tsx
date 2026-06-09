import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const ubicacionData = {
  direccion: 'Carrera 12 #15-45, Centro, San José del Guaviare',
  telefono: '',
  email: '',
  horario: '5:00 AM - 11:00 PM',
  zonas: [
    { nombre: 'Zona Centro', descripcion: 'Disponible 24/7' },
    { nombre: 'Aeropuerto', descripcion: 'Traslados especializados' },
    { nombre: 'Zonas Residenciales', descripcion: 'Cobertura completa' }
  ],
  mapaUrl: ''
}

export default function Ubicacion() {
  return (
    <section id="contacto" className="section-padding bg-black">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary text-center mb-12">Ubicación</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {ubicacionData.mapaUrl ? (
                <img 
                  src={ubicacionData.mapaUrl} 
                  alt="Mapa de ubicación" 
                  className="w-full h-64 md:h-80 rounded-lg object-cover"
                />
              ) : (
                <div className="w-full h-64 md:h-80 bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Mapa de ubicación</p>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-gold mb-4">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-gold mt-1" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Dirección</p>
                      <p className="text-white">{ubicacionData.direccion}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-gold mt-1" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Teléfono</p>
                      {ubicacionData.telefono ? <p className="text-white">{ubicacionData.telefono}</p> : null}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="text-gold mt-1" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      {ubicacionData.email ? <p className="text-white">{ubicacionData.email}</p> : null}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-gold mt-1" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Horario</p>
                      <p className="text-white">{ubicacionData.horario}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gold mb-4">Zonas de Cobertura</h3>
                <ul className="space-y-2">
                  {ubicacionData.zonas.map((zona, index) => (
                    <li key={index} className="text-gray-300">
                      • <span className="text-gold">{zona.nombre}</span> - {zona.descripcion}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}