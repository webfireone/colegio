import { useMemo } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { LoginForm } from '../components/auth/LoginForm'

export function LoginPage() {
  const navigate = useNavigate()
  const estaAutenticado = useAuthStore((s) => s.estaAutenticado)
  const fechaTexto = useMemo(() => {
    return new Intl.DateTimeFormat('es-AR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(new Date())
  }, [])

  if (estaAutenticado) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-[#050914] text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#061127]/80 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <img
              src="/fotos/MURAL.jpg"
              alt="Reencuentro de exalumnos"
              className="h-full w-full object-cover min-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/95 via-[#061127]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-celeste)] font-semibold mb-3">
                Reencuentro 1986
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-xs">
                Franciscanos, amigos de toda una vida
              </h2>
              <p className="mt-4 max-w-md text-sm text-[rgba(255,255,255,0.78)]">
                Un espacio seguro para volver a encontrarse, compartir recuerdos y revivir los mejores momentos del colegio.
              </p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,144,226,0.16),_transparent_28%)] pointer-events-none" />
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#09172d]/95 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(74,144,226,0.12)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-celeste)] font-semibold">
                Bienvenidos
              </span>
              <h1 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">
                Instituto Inmaculada
              </h1>
              <p className="mt-3 max-w-xl text-sm text-[rgba(255,255,255,0.72)]">
                Ingresá con tu email y contraseña para acceder a la red social privada de la promoción 1986.
              </p>
            </div>

            <LoginForm />

            <div className="mt-6 pt-6 border-t border-white/10">
              <button
                onClick={() => navigate('/registro')}
                className="w-full text-sm text-[var(--color-celeste)] font-medium hover:text-white transition-colors"
              >
                ¿No estás en la lista? Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[var(--color-institucional)] py-4 px-4">
        <div className="mx-auto flex flex-col gap-2 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-base max-w-6xl">
          <span className="font-semibold text-white">Franciscano, Amigos de toda una vida</span>
          <span className="text-white/90">{fechaTexto}</span>
        </div>
      </footer>
    </div>
  )
}
