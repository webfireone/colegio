import { useChat } from '../../hooks/useChat'
import { formatearFecha } from '../../utils/formatos'

export function ListaChats() {
  const { conversaciones, seleccionarConversacion, conversacionActiva, cargarConversaciones } = useChat()

  return (
    <div className="bg-[var(--color-surface)] rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
      <div className="p-3 border-b border-[var(--color-border)]">
        <input
          type="search"
          placeholder="Buscar chats..."
          className="w-full px-4 py-2.5 rounded-full bg-[var(--color-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
          aria-label="Buscar chats"
        />
      </div>
      <div className="divide-y divide-[var(--color-border)]">
        {conversaciones.length === 0 ? (
          <p className="p-4 text-sm text-[var(--color-texto-secundario)] text-center">No hay conversaciones</p>
        ) : (
          conversaciones.map((conv) => (
            <button
              key={conv.id}
              onClick={() => seleccionarConversacion(conv.id)}
              className={`w-full text-left p-3 flex items-center gap-3 hover:bg-[var(--color-surface-hover)] transition-colors ${
                conversacionActiva === conv.id ? 'bg-[var(--color-surface)]' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)]">
                {conv.fotoGrupo ? (
                  <img src={conv.fotoGrupo} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="flex items-center justify-center w-full h-full text-white text-sm font-bold">
                    {conv.nombre?.charAt(0) ?? '?'}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm truncate">{conv.nombre}</p>
                  <p className="text-[10px] text-[var(--color-texto-secundario)]">
                    {formatearFecha(conv.ultimaActividad)}
                  </p>
                </div>
                <p className="text-xs text-[var(--color-texto-secundario)] truncate mt-0.5">
                  {conv.ultimoMensajeAutor && <span className="font-medium">{conv.ultimoMensajeAutor}: </span>}
                  {conv.ultimoMensaje}
                </p>
              </div>
              {conv.noLeidos > 0 && (
                <span className="flex-shrink-0 bg-[var(--color-celeste)] text-white text-[10px] font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center">
                  {conv.noLeidos}
                </span>
              )}
              {conv.fijado && <span className="text-xs text-[var(--color-texto-secundario)]">📌</span>}
            </button>
          ))
        )}
      </div>
    </div>
  )
}
