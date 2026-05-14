import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { PLATAFORMA_INFO } from '../../utils/constantes'
import { USUARIOS, EVENTOS } from '../../utils/contenidoReal'

export function Widgets() {
  const navigate = useNavigate()
  const usuario = useAuthStore((s) => s.usuario)

  return (
    <aside className="widgets space-y-4">
      {usuario && (
        <div className="glass-card rounded-xl p-4 hover-lift">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-dorado)]">
              {usuario.fotoPerfil ? (
                <img src={usuario.fotoPerfil} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="flex items-center justify-center w-full h-full bg-[var(--color-institucional)] text-white font-bold">
                  {usuario.nombreCompleto.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <p className="font-semibold text-sm">{usuario.nombreCompleto}</p>
              <p className="text-xs text-[var(--color-texto-secundario)]">
                {usuario.online ? '🟢 En línea' : '⚪ Desconectado'}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="glass-card rounded-xl p-4 hover-glow">
        <div className="flex items-center gap-2 mb-3">
          <span>📅</span>
          <h3 className="font-semibold text-sm gradient-text-institucional">Próximos Eventos</h3>
        </div>
        <div className="space-y-3">
          {EVENTOS.slice(0, 2).map((ev) => (
            <button
              key={ev.id}
              className="w-full text-left p-3 rounded-lg engraved-pill hover-lift"
            >
              <p className="font-medium text-sm">{ev.titulo}</p>
              <p className="text-xs text-[var(--color-texto-secundario)]">{ev.fecha}</p>
              <p className="text-xs text-[var(--color-exito)] font-medium mt-1">✅ {ev.confirmados} confirmados</p>
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-xl p-4 hover-glow">
        <div className="flex items-center gap-2 mb-3">
          <span>🎂</span>
          <h3 className="font-semibold text-sm gradient-text-institucional">Cumpleaños</h3>
        </div>
        <div className="space-y-2">
          {USUARIOS.slice(0, 4).map((u, i) => (
            <div key={u.id} className="flex items-center gap-2 text-sm p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors">
              <span>🎂</span>
              <div>
                <p className="font-medium text-sm">{u.nombre}</p>
                <p className="text-xs text-[var(--color-texto-secundario)]">{['15 de mayo', '22 de mayo', '3 de junio', '12 de junio'][i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-xl p-4 hover-glow">
        <div className="flex items-center gap-2 mb-3">
          <span>👥</span>
          <h3 className="font-semibold text-sm gradient-text-institucional">Conectados</h3>
        </div>
        <div className="space-y-2">
          {USUARIOS.slice(0, 5).map((u) => (
            <div key={u.id} className="flex items-center gap-2 text-sm p-1.5 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[var(--color-exito)] animate-pulse-glow" />
              <span>{u.nombre}</span>
            </div>
          ))}
          <p className="text-xs text-[var(--color-texto-secundario)]">y {USUARIOS.length - 5} más</p>
        </div>
      </div>

      <div className="glass-card rounded-xl p-4 hover-glow">
        <h3 className="font-semibold text-sm gradient-text-institucional mb-2">Plataformas</h3>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(PLATAFORMA_INFO).map(([key, info]) => (
            <div key={key} className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors hover-lift">
              <span className="text-xl">{info.icono}</span>
              <span className="text-[10px] text-[var(--color-texto-secundario)]">{info.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
