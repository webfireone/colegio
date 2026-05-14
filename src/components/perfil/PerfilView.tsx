import { usePerfil } from '../../hooks/usePerfil'
import { useAuthStore } from '../../store/authStore'
import { formatearFecha } from '../../utils/formatos'
import { useNavigate } from 'react-router-dom'

export function PerfilView() {
  const usuario = useAuthStore((s) => s.usuario)
  const navigate = useNavigate()

  if (!usuario) return null

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-[var(--color-institucional)] to-[var(--color-celeste)] relative">
          {usuario.fotoPortada && (
            <img src={usuario.fotoPortada} alt="" className="w-full h-full object-cover" />
          )}
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-end -mt-12 mb-3">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {usuario.fotoPerfil ? (
                <img src={usuario.fotoPerfil} alt={usuario.nombreCompleto} className="w-full h-full object-cover" />
              ) : (
                <span className="flex items-center justify-center w-full h-full bg-[var(--color-institucional)] text-white text-xl font-bold">
                  {usuario.nombreCompleto.charAt(0)}
                </span>
              )}
            </div>
            <button
              onClick={() => navigate('/perfil/editar')}
              className="ml-auto px-4 py-2 rounded-full border border-[var(--color-celeste)] text-[var(--color-celeste)] text-sm font-medium hover:bg-[var(--color-celeste)] hover:text-white transition-colors"
            >
              Editar perfil
            </button>
          </div>

          <h1 className="text-xl font-bold text-[var(--color-institucional)]">{usuario.nombreCompleto}</h1>
          {usuario.apellidoSoltera && (
            <p className="text-sm text-[var(--color-texto-secundario)]">(de soltera: {usuario.apellidoSoltera})</p>
          )}

          {usuario.biografia && <p className="text-sm mt-2">{usuario.biografia}</p>}

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-[var(--color-texto-secundario)]">
            <span>🎓 Promoción 1986</span>
            {usuario.ubicacion.ciudad && <span>📍 {usuario.ubicacion.ciudad}, {usuario.ubicacion.pais}</span>}
            {usuario.profesion && <span>💼 {usuario.profesion}</span>}
            {usuario.musicaFavorita && <span>🎵 {usuario.musicaFavorita}</span>}
            {usuario.fraseEmblema && <span className="italic">"{usuario.fraseEmblema}"</span>}
          </div>

          <div className="flex gap-4 mt-4 text-sm">
            <div className="text-center">
              <p className="font-bold text-lg">{usuario.amigos.length}</p>
              <p className="text-[var(--color-texto-secundario)]">Amigos</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{usuario.seguidores.length}</p>
              <p className="text-[var(--color-texto-secundario)]">Seguidores</p>
            </div>
          </div>
        </div>
      </div>

      {usuario.hobbies && usuario.hobbies.length > 0 && (
        <div className="bg-white rounded-xl p-4 shadow-[var(--shadow-card)]">
          <h3 className="font-semibold text-sm mb-2">Intereses</h3>
          <div className="flex flex-wrap gap-2">
            {usuario.hobbies.map((h) => (
              <span key={h} className="px-3 py-1 rounded-full bg-[var(--color-crema)] text-sm">{h}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
