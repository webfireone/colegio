import { useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import { UsuarioFormData } from '../../types'

interface EditarPerfilProps {
  onCancel: () => void
  onSuccess: () => void
}

export function EditarPerfil({ onCancel, onSuccess }: EditarPerfilProps) {
  const usuario = useAuthStore((s) => s.usuario)
  const actualizarPerfil = useAuthStore((s) => s.actualizarPerfil)

  const [form, setForm] = useState<UsuarioFormData>({
    nombreCompleto: usuario?.nombreCompleto ?? '',
    apellidoSoltera: usuario?.apellidoSoltera,
    biografia: usuario?.biografia,
    fotoPerfil: usuario?.fotoPerfil,
    fotoPortada: usuario?.fotoPortada,
    ubicacion: usuario?.ubicacion ?? { ciudad: '', provincia: '', pais: '' },
    estadoCivil: usuario?.estadoCivil,
    profesion: usuario?.profesion,
    hobbies: usuario?.hobbies ?? [],
    musicaFavorita: usuario?.musicaFavorita,
    fraseEmblema: usuario?.fraseEmblema,
    privacidad: usuario?.privacidad,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    actualizarPerfil(form)
    onSuccess()
  }

  const actualizar = (campo: string, valor: any) => setForm((prev) => ({ ...prev, [campo]: valor }))

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 shadow-[var(--shadow-card)] space-y-4">
      <h2 className="text-lg font-bold text-[var(--color-institucional)]">Editar perfil</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Nombre completo</label>
        <input type="text" value={form.nombreCompleto} onChange={(e) => actualizar('nombreCompleto', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Apellido de soltera (opcional)</label>
        <input type="text" value={form.apellidoSoltera ?? ''} onChange={(e) => actualizar('apellidoSoltera', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Biografía</label>
        <textarea value={form.biografia ?? ''} onChange={(e) => actualizar('biografia', e.target.value)} rows={3}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Ciudad</label>
          <input type="text" value={form.ubicacion.ciudad ?? ''} onChange={(e) => setForm((f) => ({ ...f, ubicacion: { ...f.ubicacion, ciudad: e.target.value } }))}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">País</label>
          <input type="text" value={form.ubicacion.pais ?? ''} onChange={(e) => setForm((f) => ({ ...f, ubicacion: { ...f.ubicacion, pais: e.target.value } }))}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Profesión</label>
        <input type="text" value={form.profesion ?? ''} onChange={(e) => actualizar('profesion', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Música favorita</label>
        <input type="text" value={form.musicaFavorita ?? ''} onChange={(e) => actualizar('musicaFavorita', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Frase emblemática</label>
        <input type="text" value={form.fraseEmblema ?? ''} onChange={(e) => actualizar('fraseEmblema', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]" />
      </div>

      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onCancel}
          className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">
          Cancelar
        </button>
        <button type="submit"
          className="flex-1 py-2.5 rounded-lg bg-[var(--color-institucional)] text-white text-sm font-semibold hover:bg-[var(--color-institucional-light)] transition-colors">
          Guardar
        </button>
      </div>
    </form>
  )
}
