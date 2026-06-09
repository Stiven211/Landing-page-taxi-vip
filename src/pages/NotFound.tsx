export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <p className="text-xl text-white mb-8">Página no encontrada</p>
        <a href="/" className="text-gold hover:underline">
          Volver al inicio
        </a>
      </div>
    </div>
  )
}