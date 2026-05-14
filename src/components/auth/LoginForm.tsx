import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFotoPerfil } from '../../utils/fotos'
import { useAuthStore, USUARIOS_REALES } from '../../store/authStore'

interface UserEntry {
  nombre: string
  email: string
  telefono: string
}

export function LoginForm() {
  const navigate = useNavigate()
  const { login, loginConNombre, cargando, error, limpiarError } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modo, setModo] = useState<'form' | 'lista'>('form')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    limpiarError()
    await login(email, password)
    if (!useAuthStore.getState().error) navigate('/')
  }

  const handleClickUsuario = async (nombre: string) => {
    limpiarError()
    await loginConNombre(nombre)
    if (!useAuthStore.getState().error) navigate('/')
  }

  return (
    <div>
      {modo === 'lista' ? (
        <div className="space-y-4">
          <p className="text-sm text-[rgba(255,255,255,0.72)] text-center mb-2">
            Elige tu nombre para ingresar
          </p>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(USUARIOS_REALES).map(([key, u]) => {
              const user = u as UserEntry
              return (
                <button
                  key={key}
                  onClick={() => handleClickUsuario(key)}
                  disabled={cargando}
                  className="flex items-center gap-3 p-3 rounded-3xl border border-white/10 bg-white/5 hover:border-[var(--color-celeste)] hover:bg-[rgba(74,144,226,0.08)] transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
                    <img
                      src={getFotoPerfil(user.nombre)}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-white truncate">{user.nombre}</span>
                </button>
              )
            })}
          </div>
          <p className="text-center text-xs text-[rgba(255,255,255,0.6)] mt-2">
            Clave: tu nombre en minúsculas
          </p>
          <button
            onClick={() => setModo('form')}
            className="w-full text-sm text-[var(--color-celeste)] font-medium hover:text-white hover:underline"
          >
            Ingresar con email y contraseña
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <button
            type="button"
            onClick={() => setModo('lista')}
            className="text-sm text-[var(--color-celeste)] hover:underline"
          >
            ← Volver a la lista
          </button>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white/90">
              Email (nombre@instituto.edu)
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-[#0d1f3c] px-4 py-3 text-base text-white placeholder:text-white/50 shadow-sm outline-none transition focus:border-[var(--color-celeste)] focus:ring-2 focus:ring-[var(--color-celeste)]/30"
              placeholder="claudia@instituto.edu"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-white/90">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-[#0d1f3c] px-4 py-3 text-base text-white placeholder:text-white/50 shadow-sm outline-none transition focus:border-[var(--color-celeste)] focus:ring-2 focus:ring-[var(--color-celeste)]/30"
              placeholder="tu nombre en minúsculas"
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="rounded-3xl border border-red-200/20 bg-red-50/10 px-4 py-3 text-sm text-[var(--color-error)]" role="alert">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={cargando}
            className="w-full rounded-3xl bg-[var(--color-institucional)] py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(42,74,138,0.3)] transition hover:bg-[var(--color-celeste)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {cargando ? 'Ingresando...' : 'Iniciar sesión'}
          </button>
        </form>
      )}
    </div>
  )
}
