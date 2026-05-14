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
    <div className="relative min-h-screen bg-[#080b14] flex flex-col overflow-hidden">
      {/* ════════════════════════════════════════════════
         HORIZONTE.FM-STYLE HERO — full bleed MURAL
         ════════════════════════════════════════════════ */}
      <div className="relative flex flex-col items-center justify-center px-4 pt-12 pb-6 min-h-[55vh] md:min-h-[60vh] overflow-hidden">
        {/* Blurred background image — like horizonte .now-playing-bg */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(/fotos/MURAL.jpg)',
            filter: 'blur(16px)',
          }}
        />
        {/* Dark velo overlay — like horizonte rgba(0,0,0,0.2) */}
        <div className="absolute inset-0 bg-[#080b14]/60" />

        {/* Decorative gradient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse, var(--color-celeste), transparent 70%)' }} />

        {/* Hero content — z-10 to sit above blur */}
        <div className="relative z-10 flex flex-col items-center text-center animate-fade-in">
          {/* Main cover image — like horizonte #now-playing-cover */}
          <div className="relative group">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="/fotos/MURAL.jpg"
                alt="Instituto Inmaculada Concepción"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[var(--color-celeste)]/10 via-transparent to-[var(--color-dorado)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
          </div>

          {/* Title — like horizonte #now-playing-title */}
          <h1
            className="mt-5 text-3xl md:text-4xl font-bold tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#ffffff',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            Instituto Inmaculada
          </h1>

          {/* Subtitle — like horizonte #now-playing-artist */}
          <p
            className="mt-1 text-lg md:text-xl font-light tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.7)',
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            Promoción 1986 · Conectados por Siempre
          </p>

          {/* Divider line — editorial touch */}
          <div className="mt-4 w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />
        </div>

        {/* Decorative orbs */}
        <div className="deco-orb w-72 h-72 -top-32 -left-32 opacity-10 animate-float pointer-events-none" />
        <div className="deco-orb w-48 h-48 -bottom-16 -right-16 opacity-10 animate-float-reverse pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.08), transparent 70%)' }} />
      </div>

      {/* ════════════════════════════════════════════════
         LOGIN FORM — glass card below the hero
         ════════════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex items-start justify-center px-4 pb-8 -mt-8">
        <div className="w-full max-w-md glass-deep rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <p className="text-center text-sm text-[var(--color-texto-secundario)] mb-4">
            Elegí tu nombre para ingresar
          </p>

          {error && (
            <div className="p-3 rounded-lg bg-[var(--color-error)]/10 text-[var(--color-error)] text-sm mb-4 text-center animate-fade-in border border-[var(--color-error)]/20" role="alert">
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

          <p className="text-center text-xs text-[var(--color-texto-terciario)] mt-4">
            Clave: tu nombre en minúsculas
          </p>

          <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
            <button
              onClick={() => navigate('/registro')}
              className="w-full text-sm text-[var(--color-celeste)] font-medium hover:text-white transition-colors text-center block"
            >
              ¿No estás en la lista? Registrarse
            </button>
          </div>

          <p className="text-center text-xs text-[var(--color-texto-terciario)] mt-4">
            Solo para exalumnos · Promoción 1986
          </p>
        </div>
      </div>
    </div>
  )
}
