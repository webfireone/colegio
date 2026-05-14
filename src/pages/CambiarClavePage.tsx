import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { getFotoPerfil } from '../utils/fotos'

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
    <div className="relative min-h-screen bg-[#080b14] flex items-center justify-center p-4 overflow-hidden">
      <div className="deco-orb w-80 h-80 -top-16 -left-16 animate-levitate" />
      <div className="deco-orb w-56 h-56 -bottom-8 -right-8 animate-float-reverse" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.06), transparent 70%)' }} />
      <div className="deco-ring w-[450px] h-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" />
      <div className="w-full max-w-md relative z-10">
        <div className="glass-deep rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[var(--color-celeste)]/30 ring-2 ring-[var(--color-dorado)]/20 shadow-glow">
              {usuario?.nombreCompleto ? (
                <img
                  src={getFotoPerfil(usuario.nombreCompleto)}
                  alt={usuario.nombreCompleto}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full gradient-institucional flex items-center justify-center">
                  <span className="text-white text-xl font-bold">?</span>
                </div>
              )}
            </div>
            <h1 className="text-xl font-bold gradient-text-institucional">
              Bienvenido, {usuario?.nombreCompleto}
            </h1>
            <div className="divider-line-gold mx-auto mt-2 mb-2" />
            <p className="text-sm text-[var(--color-texto-secundario)]">
              Es tu primera vez. Cambiá tu contraseña para continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nueva-clave" className="block text-sm font-medium text-[var(--color-texto)] mb-1">
                Nueva contraseña
              </label>
              <input
                id="nueva-clave"
                type="password"
                value={nuevaClave}
                onChange={(e) => setNuevaClave(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface)] text-white border border-[var(--color-border)] text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)] transition-all duration-300 placeholder:text-[var(--color-texto-terciario)]"
                placeholder="Mínimo 6 caracteres"
                required
                minLength={6}
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="confirmar-clave" className="block text-sm font-medium text-[var(--color-texto)] mb-1">
                Confirmar nueva contraseña
              </label>
              <input
                id="confirmar-clave"
                type="password"
                value={confirmarClave}
                onChange={(e) => setConfirmarClave(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface)] text-white border border-[var(--color-border)] text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)] transition-all duration-300 placeholder:text-[var(--color-texto-terciario)]"
                placeholder="Repetí la contraseña"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-[var(--color-error)]/10 text-[var(--color-error)] text-sm border border-[var(--color-error)]/20 animate-fade-in" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={cargando}
              className="w-full py-3 rounded-lg gradient-institucional text-white font-semibold hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-all duration-300 btn-shine"
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
