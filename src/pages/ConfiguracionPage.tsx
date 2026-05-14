import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { useUIStore } from '../store/uiStore'
import { useNavigate } from 'react-router-dom'

export function ConfiguracionPage() {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const { fontSize, highContrast, toggleFontSize, toggleHighContrast } = useUIStore()
  const [confirmarSalir, setConfirmarSalir] = useState(false)

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-white">Configuración</h2>

      <div className="bg-[var(--color-surface)] rounded-xl p-4 shadow-[var(--shadow-card)] space-y-4">
        <h3 className="font-semibold text-sm">Accesibilidad</h3>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Letra grande</p>
            <p className="text-xs text-[var(--color-texto-secundario)]">Aumenta el tamaño de la tipografía</p>
          </div>
          <button
            onClick={toggleFontSize}
            className={`w-14 h-7 rounded-full transition-colors ${
              fontSize === 'large' ? 'bg-[var(--color-celeste)]' : 'bg-gray-300'
            }`}
            aria-label="Activar letra grande"
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow transition-transform ${
              fontSize === 'large' ? 'translate-x-7' : 'translate-x-0.5'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Alto contraste</p>
            <p className="text-xs text-[var(--color-texto-secundario)]">Mejora la legibilidad del texto</p>
          </div>
          <button
            onClick={toggleHighContrast}
            className={`w-14 h-7 rounded-full transition-colors ${
              highContrast ? 'bg-[var(--color-celeste)]' : 'bg-gray-300'
            }`}
            aria-label="Activar alto contraste"
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow transition-transform ${
              highContrast ? 'translate-x-7' : 'translate-x-0.5'
            }`} />
          </button>
        </div>
      </div>

      <div className="bg-[var(--color-surface)] rounded-xl p-4 shadow-[var(--shadow-card)]">
        <h3 className="font-semibold text-sm mb-3">Cuenta</h3>
        <div className="space-y-2">
          <button className="w-full text-left p-3 rounded-lg hover:bg-[var(--color-surface-hover)] text-sm transition-colors">
            🔒 Cambiar contraseña
          </button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-[var(--color-surface-hover)] text-sm transition-colors">
            📥 Descargar mis datos
          </button>
          <button
            onClick={() => setConfirmarSalir(true)}
            className="w-full text-left p-3 rounded-lg hover:bg-red-50 text-[var(--color-error)] text-sm transition-colors"
          >
            🚪 Cerrar sesión
          </button>
        </div>
      </div>

      <div className="bg-[var(--color-surface)] rounded-xl p-4 shadow-[var(--shadow-card)]">
        <h3 className="font-semibold text-sm mb-3">Acerca de</h3>
        <div className="space-y-1 text-sm text-[var(--color-texto-secundario)]">
          <p>Instituto Inmaculada Concepción</p>
          <p>Conectados por Siempre v1.0</p>
          <p>Promoción 1986 · 40 años</p>
        </div>
      </div>

      {confirmarSalir && (
        <div className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[var(--color-surface)] rounded-xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="font-semibold mb-2">¿Cerrar sesión?</h3>
            <p className="text-sm text-[var(--color-texto-secundario)] mb-4">
              Puedes volver a ingresar cuando quieras.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmarSalir(false)}
                className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={() => { logout(); navigate('/login') }}
                className="flex-1 py-2.5 rounded-lg bg-[var(--color-error)] text-white text-sm font-semibold"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
