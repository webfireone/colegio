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
  const [hobbiesText, setHobbiesText] = useState(usuario?.hobbies?.join(', ') ?? '')

  const [form, setForm] = useState<UsuarioFormData>({
    nombreCompleto: usuario?.nombreCompleto ?? '',
    alias: usuario?.alias,
    apellidoSoltera: usuario?.apellidoSoltera,
    telefono: usuario?.telefono,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const datosActualizados: UsuarioFormData = {
      ...form,
      hobbies: hobbiesText
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    }
    await actualizarPerfil(datosActualizados)
    onSuccess()
  }

  const actualizar = (campo: string, valor: any) => setForm((prev) => ({ ...prev, [campo]: valor }))

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 shadow-[var(--shadow-card)] space-y-4">
      <h2 className="text-lg font-bold text-[var(--color-institucional)]">Editar perfil</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Nombre completo</label>
        <input
          type="text"
          value={form.nombreCompleto}
          onChange={(e) => actualizar('nombreCompleto', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Alias / apodo</label>
        <input
          type="text"
          value={form.alias ?? ''}
          onChange={(e) => actualizar('alias', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
          placeholder="Por ejemplo: Claudita86"
        />
      </div>

      {(form.fotoPerfil || form.fotoPortada) && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
          <div className="rounded-3xl overflow-hidden border border-gray-200 bg-slate-50">
            <div className="px-4 py-3 text-sm font-medium text-slate-700">Vista previa perfil</div>
            {form.fotoPerfil ? (
              <img src={form.fotoPerfil} alt="Vista previa foto de perfil" className="h-40 w-full object-cover" />
            ) : (
              <div className="flex h-40 items-center justify-center bg-slate-100 text-slate-400">URL de perfil vacía</div>
            )}
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-200 bg-slate-50">
            <div className="px-4 py-3 text-sm font-medium text-slate-700">Vista previa portada</div>
            {form.fotoPortada ? (
              <img src={form.fotoPortada} alt="Vista previa foto de portada" className="h-40 w-full object-cover" />
            ) : (
              <div className="flex h-40 items-center justify-center bg-slate-100 text-slate-400">URL de portada vacía</div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">Foto de perfil (URL)</label>
          <input
            type="url"
            value={form.fotoPerfil ?? ''}
            onChange={(e) => actualizar('fotoPerfil', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Foto de portada (URL)</label>
          <input
            type="url"
            value={form.fotoPortada ?? ''}
            onChange={(e) => actualizar('fotoPortada', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium mb-1">Ciudad</label>
          <input
            type="text"
            value={form.ubicacion.ciudad ?? ''}
            onChange={(e) => setForm((prev) => ({
              ...prev,
              ubicacion: { ...prev.ubicacion, ciudad: e.target.value },
            }))}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
            placeholder="Rosario"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Provincia</label>
          <input
            type="text"
            value={form.ubicacion.provincia ?? ''}
            onChange={(e) => setForm((prev) => ({
              ...prev,
              ubicacion: { ...prev.ubicacion, provincia: e.target.value },
            }))}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
            placeholder="Santa Fe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">País</label>
          <input
            type="text"
            value={form.ubicacion.pais ?? ''}
            onChange={(e) => setForm((prev) => ({
              ...prev,
              ubicacion: { ...prev.ubicacion, pais: e.target.value },
            }))}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
            placeholder="Argentina"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">Estado civil</label>
          <select
            value={form.estadoCivil ?? 'no especifica'}
            onChange={(e) => actualizar('estadoCivil', e.target.value as any)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
          >
            <option value="no especifica">No especifica</option>
            <option value="soltero/a">Soltero/a</option>
            <option value="casado/a">Casado/a</option>
            <option value="divorciado/a">Divorciado/a</option>
            <option value="viudo/a">Viudo/a</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Música favorita</label>
          <input
            type="text"
            value={form.musicaFavorita ?? ''}
            onChange={(e) => actualizar('musicaFavorita', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
            placeholder="Por ejemplo: rock nacional"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Biografía</label>
        <textarea
          value={form.biografia ?? ''}
          onChange={(e) => actualizar('biografia', e.target.value)}
          rows={3}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Hobbies e intereses</label>
        <input
          type="text"
          value={hobbiesText}
          onChange={(e) => setHobbiesText(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
          placeholder="Por ejemplo: música, fotos, viaje"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Frase emblemática</label>
        <input
          type="text"
          value={form.fraseEmblema ?? ''}
          onChange={(e) => actualizar('fraseEmblema', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 py-2.5 rounded-lg bg-[var(--color-institucional)] text-white text-sm font-semibold hover:bg-[var(--color-institucional-light)] transition-colors"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  )
}
