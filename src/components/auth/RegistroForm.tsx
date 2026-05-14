import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { validarEmail, validarPassword, validarNombre } from '../../utils/validaciones'

export function RegistroForm() {
  const navigate = useNavigate()
  const { registro, cargando, error, limpiarError } = useAuthStore()
  const [paso, setPaso] = useState(1)
  const [form, setForm] = useState({
    email: '',
    password: '',
    nombreCompleto: '',
    anioEgreso: '1986',
    biografia: '',
    ubicacion: { ciudad: '', provincia: '', pais: 'Argentina' },
    musicaFavorita: '',
    fraseEmblema: '',
  })
  const [errorLocal, setErrorLocal] = useState<string | null>(null)

  const actualizar = (campo: string, valor: string) => setForm((prev) => ({ ...prev, [campo]: valor }))

  const siguientePaso = () => {
    if (paso === 1) {
      if (!validarEmail(form.email)) { setErrorLocal('Email inválido'); return }
      const pwErr = validarPassword(form.password)
      if (pwErr) { setErrorLocal(pwErr); return }
    }
    if (paso === 2) {
      const nomErr = validarNombre(form.nombreCompleto)
      if (nomErr) { setErrorLocal(nomErr); return }
    }
    setErrorLocal(null)
    setPaso((p) => Math.min(p + 1, 3))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    limpiarError()
    setErrorLocal(null)
    await registro({
      email: form.email,
      password: form.password,
      nombreCompleto: form.nombreCompleto,
      anioEgreso: 1986,
      biografia: form.biografia,
      ubicacion: form.ubicacion,
      musicaFavorita: form.musicaFavorita,
      fraseEmblema: form.fraseEmblema,
      privacidad: 'solo_companieros',
    })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {paso === 1 && (
        <>
          <h3 className="font-semibold text-lg text-[var(--color-institucional)]">Paso 1: Tu cuenta</h3>
          <div>
            <label htmlFor="reg-email" className="block text-sm font-medium mb-1">Email</label>
            <input id="reg-email" type="email" value={form.email} onChange={(e) => actualizar('email', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" required />
          </div>
          <div>
            <label htmlFor="reg-pass" className="block text-sm font-medium mb-1">Contraseña (mín. 6 caracteres)</label>
            <input id="reg-pass" type="password" value={form.password} onChange={(e) => actualizar('password', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" required minLength={6} />
          </div>
        </>
      )}

      {paso === 2 && (
        <>
          <h3 className="font-semibold text-lg text-[var(--color-institucional)]">Paso 2: Tus datos</h3>
          <div>
            <label htmlFor="reg-nombre" className="block text-sm font-medium mb-1">Nombre completo</label>
            <input id="reg-nombre" type="text" value={form.nombreCompleto} onChange={(e) => actualizar('nombreCompleto', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" required />
          </div>
          <div>
            <label htmlFor="reg-anio" className="block text-sm font-medium mb-1">Año de egreso</label>
            <input id="reg-anio" type="number" value={form.anioEgreso} disabled
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base bg-gray-50" />
            <p className="text-xs text-[var(--color-texto-secundario)] mt-1">Solo exalumnos de la promoción 1986</p>
          </div>
          <div>
            <label htmlFor="reg-ciudad" className="block text-sm font-medium mb-1">Ciudad</label>
            <input id="reg-ciudad" type="text" value={form.ubicacion.ciudad} onChange={(e) => setForm((f) => ({ ...f, ubicacion: { ...f.ubicacion, ciudad: e.target.value } }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
          </div>
        </>
      )}

      {paso === 3 && (
        <>
          <h3 className="font-semibold text-lg text-[var(--color-institucional)]">Paso 3: Tu historia</h3>
          <div>
            <label htmlFor="reg-bio" className="block text-sm font-medium mb-1">Cuéntanos de ti</label>
            <textarea id="reg-bio" value={form.biografia} onChange={(e) => actualizar('biografia', e.target.value)} rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
          </div>
          <div>
            <label htmlFor="reg-musica" className="block text-sm font-medium mb-1">Tu música favorita de los 80</label>
            <input id="reg-musica" type="text" value={form.musicaFavorita} onChange={(e) => actualizar('musicaFavorita', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
          </div>
          <div>
            <label htmlFor="reg-frase" className="block text-sm font-medium mb-1">Una frase que recuerdes del colegio</label>
            <input id="reg-frase" type="text" value={form.fraseEmblema} onChange={(e) => actualizar('fraseEmblema', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
          </div>
        </>
      )}

      {(errorLocal || error) && (
        <div className="p-3 rounded-lg bg-red-50 text-[var(--color-error)] text-sm" role="alert">
          {errorLocal || error}
        </div>
      )}

      <div className="flex justify-between">
        {paso > 1 && (
          <button type="button" onClick={() => setPaso((p) => p - 1)}
            className="px-6 py-3 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">
            Atrás
          </button>
        )}
        {paso < 3 ? (
          <button type="button" onClick={siguientePaso}
            className="ml-auto px-6 py-3 rounded-lg bg-[var(--color-celeste)] text-white font-semibold text-sm hover:bg-blue-600 transition-colors">
            Siguiente
          </button>
        ) : (
          <button type="submit" disabled={cargando}
            className="ml-auto px-6 py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold text-sm hover:bg-[var(--color-institucional-light)] disabled:opacity-50 transition-colors">
            {cargando ? 'Creando cuenta...' : 'Crear cuenta'}
          </button>
        )}
      </div>

      <p className="text-center text-sm text-[var(--color-texto-secundario)]">
        ¿Ya tienes cuenta?{' '}
        <button type="button" onClick={() => navigate('/login')} className="text-[var(--color-celeste)] font-medium hover:underline">
          Inicia sesión
        </button>
      </p>
    </form>
  )
}
