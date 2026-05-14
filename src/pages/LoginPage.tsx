import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export function LoginPage() {
  const navigate = useNavigate()
  const estaAutenticado = useAuthStore((s) => s.estaAutenticado)

  if (estaAutenticado) {
    navigate('/', { replace: true })
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[var(--color-institucional)] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏫</span>
            </div>
            <h1 className="text-2xl font-bold text-[var(--color-institucional)]" style={{ fontFamily: 'var(--font-heading)' }}>
              Instituto Inmaculada Concepción
            </h1>
            <p className="text-[var(--color-texto-secundario)] mt-1 text-sm italic">
              "Cuarenta años después, una sola app para seguir juntos"
            </p>
          </div>

          <p className="text-center text-sm text-[var(--color-texto-secundario)] mb-6">
            Ingresa para reencontrarte con tus compañeros de la Promoción 1986
          </p>

          <div className="space-y-3">
            <button
              onClick={() => navigate('/login')}
              className="w-full py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold hover:bg-[var(--color-institucional-light)] transition-colors"
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => navigate('/registro')}
              className="w-full py-3 rounded-lg border-2 border-[var(--color-institucional)] text-[var(--color-institucional)] font-semibold hover:bg-[var(--color-crema)] transition-colors"
            >
              Registrarse
            </button>
          </div>

          <p className="text-center text-xs text-[var(--color-texto-secundario)] mt-6">
            Solo para exalumnos del Instituto Inmaculada Concepción · Promoción 1986
          </p>
        </div>
      </div>
    </div>
  )
}
