import { useAuthStore } from '../../store/authStore'
import { formatearFecha } from '../../utils/formatos'
import { useNavigate } from 'react-router-dom'
import { USUARIOS } from '../../utils/contenidoReal'
import { getFotoGrupo, getFotoPerfil } from '../../utils/fotos'

export function PerfilView() {
  const usuario = useAuthStore((s) => s.usuario)
  const navigate = useNavigate()

  if (!usuario) return null

  const amigosData = USUARIOS.filter((u) => usuario.amigos.includes(u.id))

  return (
    <div className="space-y-6">

      {/* ════════════════════════════════════
         COVER + AVATAR — dark hero
         ════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        {/* Decorative orbs */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, var(--color-celeste), transparent 70%)' }} />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, var(--color-dorado), transparent 70%)' }} />

        {/* Cover image */}
        <div className="relative h-40 md:h-48 overflow-hidden">
          <img
            src={usuario.fotoPortada || getFotoGrupo()}
            alt="Portada de perfil"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, #0f172a 100%)' }} />
        </div>

        {/* Avatar + info */}
        <div className="relative px-6 pb-6 -mt-16">
          <div className="flex items-end gap-4 mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl ring-2 ring-[var(--color-dorado)]/30 relative">
              <img
                src={usuario.fotoPerfil || ''}
                alt={usuario.nombreCompleto}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling
                  if (fallback) (fallback as HTMLElement).style.display = 'flex'
                }}
              />
              <span className="hidden absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-institucional), var(--color-celeste))' }}>
                <span className="text-white text-2xl font-bold">{usuario.nombreCompleto.charAt(0)}</span>
              </span>
            </div>
            <button
              onClick={() => navigate('/perfil/editar')}
              className="ml-auto px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 hover-lift"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
              }}
            >
              ✏️ Editar perfil
            </button>
          </div>

          <h1 className="text-2xl font-bold text-white/90">{usuario.nombreCompleto}</h1>
          {usuario.alias && (
            <p className="text-sm text-[var(--color-celeste)]">@{usuario.alias}</p>
          )}
          {usuario.apellidoSoltera && (
            <p className="text-sm text-white/40">de soltera: {usuario.apellidoSoltera}</p>
          )}

          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-white/50">
            <span>🎓 Promoción 1986</span>
            {usuario.ubicacion.ciudad && <span>📍 {usuario.ubicacion.ciudad}{usuario.ubicacion.pais ? `, ${usuario.ubicacion.pais}` : ''}</span>}
            {usuario.profesion && <span>💼 {usuario.profesion}</span>}
            {usuario.telefono && <span>📞 {usuario.telefono}</span>}
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <p className="font-bold text-xl text-white/90">{usuario.amigos.length}</p>
              <p className="text-[11px] text-white/40 tracking-wide uppercase">Amigos</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl text-white/90">{usuario.seguidores.length}</p>
              <p className="text-[11px] text-white/40 tracking-wide uppercase">Seguidores</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl text-white/90">{2026 - 1986}</p>
              <p className="text-[11px] text-white/40 tracking-wide uppercase">Años</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
         BIO — glass card on dark
         ════════════════════════════════════ */}
      <section className="rounded-2xl p-5" style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)' }}>
        {usuario.biografia && (
          <p className="text-sm text-white/70 leading-relaxed">{usuario.biografia}</p>
        )}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-white/50">
          {usuario.musicaFavorita && <span>🎵 {usuario.musicaFavorita}</span>}
          {usuario.estadoCivil !== 'no especifica' && (
            <span>
              {usuario.estadoCivil === 'casado/a' ? '💍 Casado/a' : usuario.estadoCivil === 'soltero/a' ? '💙 Soltero/a' : '💜 Divorciado/a'}
            </span>
          )}
        </div>
        {usuario.fraseEmblema && (
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-sm text-white/40 italic">"{usuario.fraseEmblema}"</p>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════
         HOBBIES / INTERESES
         ════════════════════════════════════ */}
      {usuario.hobbies && usuario.hobbies.length > 0 && (
        <section className="rounded-2xl p-5" style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <h3 className="text-sm font-semibold text-white/60 tracking-wide uppercase mb-3">Intereses</h3>
          <div className="flex flex-wrap gap-2">
            {usuario.hobbies.map((h) => (
              <span key={h} className="px-3 py-1.5 rounded-full text-xs font-medium text-white/70" style={{ background: 'rgba(74,144,226,0.12)', border: '1px solid rgba(74,144,226,0.15)' }}>
                {h}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════
         AMIGOS — horizontal strip
         ════════════════════════════════════ */}
      {amigosData.length > 0 && (
        <section className="rounded-2xl p-5" style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <h3 className="text-sm font-semibold text-white/60 tracking-wide uppercase mb-3">
            Amigos <span className="text-white/30 font-normal">({amigosData.length})</span>
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-1 no-scrollbar">
            {amigosData.slice(0, 10).map((a) => (
              <button
                key={a.id}
                onClick={() => navigate(`/perfil/${a.id}`)}
                className="flex flex-col items-center gap-1 shrink-0 hover-lift"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
                  <img
                    src={getFotoPerfil(a.nombre)}
                    alt={a.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] text-white/50 truncate max-w-[60px]">{a.nombre}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════
         BOTTOM
         ════════════════════════════════════ */}
      <div className="text-center">
        <p className="text-[10px] text-white/20">Miembro desde {formatearFecha(usuario.fechaCreacion)}</p>
      </div>
    </div>
  )
}
