import { useModoAyuda } from '../../hooks/useModoAyuda'

export function BotonAyuda() {
  const { modoAyuda, toggleModoAyuda } = useModoAyuda()

  return (
    <button
      onClick={toggleModoAyuda}
      className={`fixed bottom-20 md:bottom-6 right-4 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl transition-all duration-200 ${
        modoAyuda
          ? 'bg-[var(--color-celeste)] text-white scale-110'
          : 'bg-[var(--color-institucional)] text-white hover:scale-105'
      }`}
      aria-label={modoAyuda ? 'Salir del modo ayuda' : '¿Necesitas ayuda?'}
      title={modoAyuda ? 'Salir del modo ayuda' : '¿Necesitas ayuda?'}
    >
      {modoAyuda ? '✕' : '❓'}
    </button>
  )
}
