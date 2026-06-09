import { motion } from 'framer-motion'

type ButtonVariant = 'gold' | 'outline-gold'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: React.ReactNode
}

export function Button({ variant = 'gold', children, className = '', ...props }: ButtonProps) {
  const baseClass = variant === 'gold' ? 'btn-gold' : 'btn-outline-gold'
  
  return (
    <motion.button
      className={`${baseClass} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {children}
    </motion.button>
  )
}