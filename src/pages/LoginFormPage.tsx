import { LoginForm } from '../components/auth/LoginForm'
import { useNavigate } from 'react-router-dom'

export function LoginFormPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-[var(--color-institucional)]" style={{ fontFamily: 'var(--font-heading)' }}>
              Iniciar sesión
            </h1>
            <p className="text-sm text-[var(--color-texto-secundario)] mt-1">
              Bienvenido de vuelta a tu comunidad
            </p>
          </div>
          <LoginForm />
          <p className="text-center text-xs text-[var(--color-texto-secundario)] mt-6">
            ¿Olvidaste tu contraseña?{' '}
            <button className="text-[var(--color-celeste)] font-medium hover:underline">Recuperar</button>
          </p>
        </div>
      </div>
    </div>
  )
}
