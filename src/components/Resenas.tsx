import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const resenas = [
  {
    nombre: 'María González',
    calificacion: 5,
    comentario: 'Excelente servicio, puntual y muy profesional. El vehículo impecable y el trato cordial.',
    fecha: '15 de mayo, 2024'
  },
  {
    nombre: 'Juan Pérez',
    calificacion: 5,
    comentario: 'Servicio VIP de verdad. Llegó a tiempo y el viaje fue muy cómodo. Recomendado.',
    fecha: '10 de mayo, 2024'
  },
  {
    nombre: 'Ana Rodríguez',
    calificacion: 5,
    comentario: 'Mejor taxi premium en el Guaviare. Carlos es un excelente conductor.',
    fecha: '8 de mayo, 2024'
  },
  {
    nombre: 'Luis Martínez',
    calificacion: 5,
    comentario: 'Servicio impecable, tarifas justas y puntualidad garantizada. Volveré a usar.',
    fecha: '2 de mayo, 2024'
  }
]

export default function Resenas() {
  return (
    <section id="resenas" className="section-padding bg-black-dark">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary text-center mb-12">Reseñas de Clientes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resenas.map((resena, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gold flex flex-col h-full"
              >
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < resena.calificacion ? 'text-gold fill-gold' : 'text-gray-600'} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-4 flex-grow">"{resena.comentario}"</p>
                
                <div className="mt-auto">
                  <p className="font-bold text-white">{resena.nombre}</p>
                  <p className="text-gray-400 text-sm">{resena.fecha}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}