import { useEffect, useRef } from 'react'

interface ModalProps {
  abierto: boolean
  onClose: () => void
  titulo: string
  children: React.ReactNode
}

export function ModalGlass({ abierto, onClose, titulo, children }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (abierto) {
      document.body.style.overflow = 'hidden'
      ref.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [abierto])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (abierto) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [abierto, onClose])

  if (!abierto) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        ref={ref}
        tabIndex={-1}
        className="w-full max-w-lg rounded-xl p-6 shadow-[var(--shadow-modal)] border border-white/30"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[var(--color-institucional)]">{titulo}</h2>
          <button
            onClick={onClose}
            className="touch-target text-xl text-[var(--color-texto-secundario)] hover:text-[var(--color-error)]"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
