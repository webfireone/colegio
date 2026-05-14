import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export function CambiarClavePage() {
  const navigate = useNavigate()
  const { cambiarClave, cargando, usuario, logout } = useAuthStore()
  const [nuevaClave, setNuevaClave] = useState('')
  const [confirmarClave, setConfirmarClave] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (nuevaClave.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }
    if (nuevaClave !== confirmarClave) {
      setError('Las contraseñas no coinciden')
      return
    }

    await cambiarClave(nuevaClave)
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[var(--color-dorado)] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔑</span>
            </div>
            <h1 className="text-xl font-bold text-[var(--color-institucional)]">
              Bienvenido, {usuario?.nombreCompleto}
            </h1>
            <p className="text-sm text-[var(--color-texto-secundario)] mt-1">
              Es tu primera vez. Cambiá tu contraseña para continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nueva-clave" className="block text-sm font-medium mb-1">
                Nueva contraseña
              </label>
              <input
                id="nueva-clave"
                type="password"
                value={nuevaClave}
                onChange={(e) => setNuevaClave(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
                placeholder="Mínimo 6 caracteres"
                required
                minLength={6}
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="confirmar-clave" className="block text-sm font-medium mb-1">
                Confirmar nueva contraseña
              </label>
              <input
                id="confirmar-clave"
                type="password"
                value={confirmarClave}
                onChange={(e) => setConfirmarClave(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
                placeholder="Repetí la contraseña"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-[var(--color-error)] text-sm" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={cargando}
              className="w-full py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold hover:bg-[var(--color-institucional-light)] disabled:opacity-50 transition-colors"
            >
              {cargando ? 'Guardando...' : 'Cambiar contraseña'}
            </button>
          </form>

          <p className="text-center text-xs text-[var(--color-texto-secundario)] mt-4">
            <button onClick={() => { logout(); navigate('/login') }}
              className="text-[var(--color-celeste)] hover:underline">
              Cerrar sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
