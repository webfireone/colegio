import { useNavigate, Navigate } from 'react-router-dom'
import { useAuthStore, USUARIOS_REALES } from '../store/authStore'

export function LoginPage() {
  const navigate = useNavigate()
  const { loginConNombre, cargando, error, limpiarError } = useAuthStore()
  const estaAutenticado = useAuthStore((s) => s.estaAutenticado)

  if (estaAutenticado) {
    return <Navigate to="/" replace />
  }

  const handleClickUsuario = async (nombre: string) => {
    limpiarError()
    await loginConNombre(nombre)
    if (!useAuthStore.getState().error) navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <img
              src="/logo.jpg"
              alt="Instituto Inmaculada Concepción"
              className="w-28 h-28 rounded-2xl object-cover mx-auto mb-4 shadow-lg"
            />
            <h1 className="text-2xl font-bold text-[var(--color-institucional)]" style={{ fontFamily: 'var(--font-heading)' }}>
              Instituto Inmaculada Concepción
            </h1>
            <p className="text-[var(--color-texto-secundario)] mt-1 text-sm italic">
              "Cuarenta años después, una sola app para seguir juntos"
            </p>
          </div>

          <p className="text-center text-sm text-[var(--color-texto-secundario)] mb-4">
            Elegí tu nombre para ingresar
          </p>

          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-[var(--color-error)] text-sm mb-4 text-center" role="alert">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            {Object.entries(USUARIOS_REALES).map(([key, u]) => (
              <button
                key={key}
                onClick={() => handleClickUsuario(key)}
                disabled={cargando}
                className="flex items-center gap-2 p-3 rounded-lg bg-[var(--color-crema)] hover:bg-[var(--color-celeste)]/10 hover:border-[var(--color-celeste)] border border-transparent transition-all text-left"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)]">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.nombre}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium truncate">{u.nombre}</span>
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-[var(--color-texto-secundario)] mt-4">
            Clave: tu nombre en minúsculas
          </p>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={() => navigate('/registro')}
              className="w-full text-sm text-[var(--color-celeste)] font-medium hover:underline text-center block"
            >
              ¿No estás en la lista? Registrarse
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
