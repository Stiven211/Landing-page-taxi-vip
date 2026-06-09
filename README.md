# Taxi VIP - Landing Page

Landing page profesional para servicio de taxi VIP en San José del Guaviare, Colombia. Optimizada 100% para dispositivos móviles.

## Stack Tecnológico
- React 19 + TypeScript + Tailwind CSS 4
- Animaciones: Framer Motion
- Enrutamiento: Wouter
- Iconos: Lucide React

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Estructura
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Conductor.tsx
│   ├── Tarifas.tsx
│   ├── Resenas.tsx
│   ├── Ubicacion.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ui/
│       └── Button.tsx
├── pages/
│   ├── Home.tsx
│   └── NotFound.tsx
└── styles/
    └── globals.css
```

## Configuración
Rellenar los campos marcados como `[DEJAR VACÍO]` en los siguientes archivos:
- `src/components/Hero.tsx` - Número WhatsApp y teléfono
- `src/components/Conductor.tsx` - Foto, nombre, descripción
- `src/components/Ubicacion.tsx` - Teléfono, email, mapa