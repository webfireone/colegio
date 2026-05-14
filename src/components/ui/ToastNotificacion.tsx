import { useEffect } from 'react'

interface ToastProps {
  mensaje: string
  tipo?: 'exito' | 'error' | 'info'
  visible: boolean
  onClose: () => void
}

export function ToastNotificacion({ mensaje, tipo = 'info', visible, onClose }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 4000)
      return () => clearTimeout(timer)
    }
  }, [visible, onClose])

  if (!visible) return null

  const colores = {
    exito: 'bg-[var(--color-exito)]',
    error: 'bg-[var(--color-error)]',
    info: 'bg-[var(--color-celeste)]',
  }

  return (
    <div
      className={`fixed top-4 right-4 z-[400] px-4 py-3 rounded-lg text-white text-sm shadow-lg animate-slide-in ${colores[tipo]}`}
      role="alert"
    >
      {mensaje}
    </div>
  )
}
