import { motion } from 'framer-motion'
import { useState } from 'react'

const tarifas = [
  { zona: 'Zona Urbana', precio: '$6.500' },
  { zona: 'Batallón', precio: '$7.700' },
  { zona: 'Manga de coleo', precio: '$10.000' },
  { zona: 'Agua Bonita', precio: '$14.400' },
  { zona: 'Resbalón', precio: '$46.200' },
  { zona: 'La leona', precio: '$40.800' },
  { zona: 'Villa Luz', precio: '$14.400' },
  { zona: 'La lindoza', precio: '$18.700' },
  { zona: 'Charco Indio', precio: '$19.900' },
  { zona: 'Amazón', precio: '$11.500' },
  { zona: 'La Recebera', precio: '$33.000' },
  { zona: 'Túneles', precio: '$40.800' },
  { zona: 'Ciudad de piedra', precio: '$46.000' },
  { zona: 'Escuela el Progreso', precio: '$9.000' },
  { zona: 'Cambulos', precio: '$55.000' },
  { zona: 'Villa Alejandra', precio: '$15.500' },
  { zona: 'La María', precio: '$14.400' },
  { zona: 'Cancha La Victoria', precio: '$7.000' },
  { zona: 'Bomba sabana', precio: '$19.000' },
  { zona: 'Universidad De La Amazonia', precio: '$23.000' },
  { zona: 'Puerta de Orión', precio: '$28.700' },
  { zona: 'Barrio Primavera', precio: '$7.000' },
  { zona: 'Picapiedra', precio: '$18.800' },
  { zona: 'Puente del Nowen', precio: '$30.000' },
  { zona: 'Colegio San José Obrero', precio: '$8.000' },
  { zona: 'Playa Guío', precio: '$26.400' },
  { zona: 'Gravillera Brazuelo', precio: '$13.200' },
  { zona: 'Escuela Puerto Tolima', precio: '$25.000' },
  { zona: 'Bocas de Agua bonita', precio: '$16.000' },
  { zona: 'Base Barrancón', precio: '$20.000' },
  { zona: 'Reserva Indígena Refugio', precio: '$25.000' },
  { zona: 'Reserva Indígena Barrancón', precio: '$28.600' },
  { zona: 'Tranquilandia', precio: '$28.600' },
  { zona: 'Parcelas Agua Bonita', precio: '$21.000' },
  { zona: 'Santa Rosa', precio: '$27.500' },
  { zona: 'Santo Domingo', precio: '$12.000' },
  { zona: 'Providencia', precio: '$12.000' },
  { zona: 'Reserva Nukac', precio: '$28.000' },
  { zona: 'Hotel Nupana', precio: '$28.000' }
]

const recargos = [
  { label: 'Recargo Nocturno (09:00 pm a 05:00 am)', precio: '$1.000' },
  { label: 'Recargo Dominicales y festivos', precio: '$500' },
  { label: 'Hora de servicio', precio: '$35.000' }
]

export default function Tarifas() {
  const [mostrarTodas, setMostrarTodas] = useState(false)

  const tarifasDestacadas = tarifas.slice(0, 3)
  const tarifasRestantes = tarifas.slice(3)

  return (
    <section id="tarifas" className="section-padding bg-black">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary text-center mb-4">Tarifas</h2>
          <p className="text-body text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            Tarifas transparentes y competitivas para todo el Guaviare
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tarifasDestacadas.map((tarifa, index) => (
              <motion.div
                key={tarifa.zona}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gold text-center"
              >
                <h3 className="text-xl font-bold text-gold mb-4">{tarifa.zona}</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Tarifa</p>
                    <p className="text-3xl font-bold text-gold">{tarifa.precio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-6">
            <p className="text-body">
              Tarifa mínima:{' '}
              <span className="text-gold font-bold">$6.500</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">Zona Urbana</p>
          </div>

          <div className="text-center mb-8">
            <button
              onClick={() => setMostrarTodas(!mostrarTodas)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-black font-bold rounded hover:bg-gold-light transition-colors"
            >
              {mostrarTodas ? 'Ocultar tarifas' : 'Ver todas las tarifas'}
            </button>
          </div>

          {mostrarTodas && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
            >
              {tarifasRestantes.map((tarifa, index) => (
                <div
                  key={tarifa.zona}
                  className="bg-black-dark border border-gold/20 rounded-lg p-4 flex justify-between items-center"
                >
                  <span className="text-white font-medium">{tarifa.zona}</span>
                  <span className="text-gold font-bold text-lg">{tarifa.precio}</span>
                </div>
              ))}
            </motion.div>
          )}

          <div className="border-t border-gold/20 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gold font-playfair text-center mb-6">Recargos y servicios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recargos.map((recargo, index) => (
                <motion.div
                  key={recargo.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-gold text-center"
                >
                  <p className="text-gray-400 text-sm mb-2">{recargo.label}</p>
                  <p className="text-2xl font-bold text-gold">{recargo.precio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
