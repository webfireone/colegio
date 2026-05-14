import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const [modo, setModo] = useState<'form' | 'lista'>('lista')

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
        <div className="space-y-3">
          <p className="text-sm text-[var(--color-texto-secundario)] text-center mb-4">
            Elige tu nombre para ingresar
          </p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(USUARIOS_REALES).map(([key, u]) => {
              const user = u as UserEntry
              return (
                <button
                  key={key}
                  onClick={() => handleClickUsuario(key)}
                  disabled={cargando}
                  className="flex items-center gap-2 p-3 rounded-lg bg-[var(--color-crema)] hover:bg-[var(--color-celeste)]/10 hover:border-[var(--color-celeste)] border border-transparent transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)]">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.nombre}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium truncate">{user.nombre}</span>
                </button>
              )
            })}
          </div>
          <p className="text-center text-xs text-[var(--color-texto-secundario)] mt-2">
            Clave: tu nombre en minúsculas
          </p>
          <button
            onClick={() => setModo('form')}
            className="w-full text-sm text-[var(--color-celeste)] font-medium hover:underline mt-2"
          >
            Ingresar con email y contraseña
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="button"
            onClick={() => setModo('lista')}
            className="text-sm text-[var(--color-celeste)] hover:underline mb-2 block"
          >
            ← Volver a la lista
          </button>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email (nombre@instituto.edu)
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
              placeholder="claudia@instituto.edu"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
              placeholder="tu nombre en minúsculas"
              required
              autoComplete="current-password"
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
            className="w-full py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold text-base hover:bg-[var(--color-institucional-light)] disabled:opacity-50 transition-colors"
          >
            {cargando ? 'Ingresando...' : 'Iniciar sesión'}
          </button>
        </form>
      )}
    </div>
  )
}
