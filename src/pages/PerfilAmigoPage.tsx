import { useParams, useNavigate } from 'react-router-dom'
import { usePerfil } from '../hooks/usePerfil'
import { useEffect } from 'react'

export function PerfilAmigoPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { perfilesVistos, cargarPerfil, cargando } = usePerfil()

  useEffect(() => {
    if (id) cargarPerfil(id)
  }, [id])

  const perfil = id ? perfilesVistos[id] : null

  if (cargando || !perfil) {
    return (
      <div className="bg-white rounded-xl p-8 text-center animate-pulse">
        <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3" />
        <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-[var(--color-institucional)] to-[var(--color-celeste)]" />
        <div className="px-4 pb-4">
          <div className="flex items-end -mt-12 mb-3">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {perfil.fotoPerfil ? (
                <img src={perfil.fotoPerfil} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="flex items-center justify-center w-full h-full bg-[var(--color-institucional)] text-white text-xl font-bold">
                  {perfil.nombreCompleto.charAt(0)}
                </span>
              )}
            </div>
            <div className="ml-auto flex gap-2">
              <button className="px-4 py-2 rounded-full bg-[var(--color-celeste)] text-white text-sm font-medium hover:bg-blue-600 transition-colors">
                ➕ Agregar amigo
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">
                💬 Mensaje
              </button>
            </div>
          </div>

          <h1 className="text-xl font-bold text-[var(--color-institucional)]">{perfil.nombreCompleto}</h1>
          {perfil.biografia && <p className="text-sm mt-2">{perfil.biografia}</p>}

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-[var(--color-texto-secundario)]">
            <span>🎓 Promoción {perfil.anioEgreso}</span>
            {perfil.ubicacion.ciudad && <span>📍 {perfil.ubicacion.ciudad}</span>}
            {perfil.profesion && <span>💼 {perfil.profesion}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
