import { useNavigate, Navigate } from 'react-router-dom'
import { getFotoPerfil } from '../utils/fotos'
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
    <div className="relative min-h-screen bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center p-4 overflow-hidden">
      <div className="deco-orb w-96 h-96 -top-20 -left-20 animate-levitate" />
      <div className="deco-orb w-64 h-64 -bottom-10 -right-10 animate-float-reverse" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.06), transparent 70%)' }} />
      <div className="deco-ring w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" />
      <div className="deco-ring w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-reverse" style={{ animationDelay: '2s' }} />
      <div className="w-full max-w-md relative z-10">
        <div className="glass-card rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <img
                src="/logo.jpg"
                alt="Instituto Inmaculada Concepción"
                className="w-28 h-28 rounded-2xl object-cover mx-auto mb-4 shadow-glow"
              />
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[var(--color-dorado)]/20 to-transparent -z-10 blur-sm" />
            </div>
            <h1 className="text-2xl font-bold gradient-text-institucional" style={{ fontFamily: 'var(--font-heading)' }}>
              Instituto Inmaculada Concepción
            </h1>
            <div className="divider-line-left mx-auto mt-2 mb-2" />
            <p className="text-[var(--color-texto-secundario)] text-sm italic">
              "Cuarenta años después, una sola app para seguir juntos"
            </p>
          </div>

          <p className="text-center text-sm text-[var(--color-texto-secundario)] mb-4">
            Elegí tu nombre para ingresar
          </p>

          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-[var(--color-error)] text-sm mb-4 text-center animate-fade-in" role="alert">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            {Object.entries(USUARIOS_REALES).map(([key, u]) => (
              <button
                key={key}
                onClick={() => handleClickUsuario(key)}
                disabled={cargando}
                className="engraved-pill flex items-center gap-2 p-3 text-left hover-lift"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)]">
                  <img
                    src={getFotoPerfil(u.nombre)}
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
