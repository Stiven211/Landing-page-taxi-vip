import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Conductor', href: '#conductor' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Contacto', href: '#contacto' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gold">
      <nav className="container-responsive h-16 md:h-20 flex items-center justify-between">
        <a href="/" className="text-xl md:text-2xl font-bold font-playfair text-gold">
          Jose Eduar Urrego
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-gold transition-colors font-inter text-sm md:text-base"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/573155555543"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm md:text-base px-4 md:px-6 py-2"
          >
            Reservar
          </a>
        </div>

        <button
          className="md:hidden text-gold p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gold">
          <div className="container-responsive py-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-gold transition-colors font-inter py-3 px-2 text-lg"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/573155555543"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center mt-2"
              onClick={handleLinkClick}
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
