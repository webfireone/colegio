import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VerificacionCodigo } from '../components/auth/VerificacionCodigo'
import { RegistroForm } from '../components/auth/RegistroForm'

export function RegistroPage() {
  const navigate = useNavigate()
  const [paso, setPaso] = useState<'email' | 'codigo' | 'registro'>('email')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleEnviarCodigo = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.includes('@')) setPaso('codigo')
    else setError('Email inválido')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-[var(--color-institucional)]" style={{ fontFamily: 'var(--font-heading)' }}>
              Unirse a la comunidad
            </h1>
            <p className="text-sm text-[var(--color-texto-secundario)] mt-1">
              Promoción 1986 · Instituto Inmaculada Concepción
            </p>
          </div>

          {paso === 'email' && (
            <form onSubmit={handleEnviarCodigo} className="space-y-4">
              <div>
                <label htmlFor="email-reg" className="block text-sm font-medium mb-1">Tu email</label>
                <input
                  id="email-reg"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(null) }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              {error && <p className="text-sm text-[var(--color-error)]">{error}</p>}
              <button type="submit" className="w-full py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold hover:bg-[var(--color-institucional-light)] transition-colors">
                Enviar código
              </button>
            </form>
          )}

          {paso === 'codigo' && (
            <VerificacionCodigo
              email={email}
              onCompletado={() => setPaso('registro')}
              onError={setError}
            />
          )}

          {paso === 'registro' && <RegistroForm />}

          <p className="text-center text-xs text-[var(--color-texto-secundario)] mt-4">
            ¿Ya tienes cuenta?{' '}
            <button onClick={() => navigate('/login')} className="text-[var(--color-celeste)] font-medium hover:underline">
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
