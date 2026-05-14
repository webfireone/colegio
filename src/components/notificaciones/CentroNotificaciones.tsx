import { useNotificaciones } from '../../hooks/useNotificaciones'
import { formatearFecha } from '../../utils/formatos'
import { PLATAFORMA_INFO } from '../../utils/constantes'

export function CentroNotificaciones() {
  const { notificaciones, noLeidas, marcarLeida, marcarTodasLeidas } = useNotificaciones()

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">
          Notificaciones
          {noLeidas > 0 && (
            <span className="ml-2 px-2 py-0.5 rounded-full bg-[var(--color-error)] text-white text-xs">
              {noLeidas}
            </span>
          )}
        </h2>
        {noLeidas > 0 && (
          <button
            onClick={marcarTodasLeidas}
            className="text-sm text-[var(--color-celeste)] font-medium hover:underline"
          >
            Marcar todas leídas
          </button>
        )}
      </div>

      <div className="divide-y divide-[var(--color-border)] bg-[var(--color-surface)] rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
        {notificaciones.length === 0 ? (
          <p className="p-6 text-sm text-center text-[var(--color-texto-secundario)]">
            No tienes notificaciones
          </p>
        ) : (
          notificaciones.map((n) => {
            const plataforma = PLATAFORMA_INFO[n.plataforma]
            return (
              <button
                key={n.id}
                onClick={() => marcarLeida(n.id)}
                className={`w-full text-left p-4 flex items-start gap-3 hover:bg-[var(--color-surface-hover)] transition-colors ${
                  !n.leida ? 'bg-[var(--color-surface)]' : ''
                }`}
              >
                <div className="relative">
                  <span className="text-xl">{plataforma.icono}</span>
                  {!n.leida && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[var(--color-celeste)] rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{n.mensaje}</p>
                  <p className="text-xs text-[var(--color-texto-secundario)] mt-0.5">
                    {formatearFecha(n.fechaCreacion)} · {plataforma.nombre}
                  </p>
                </div>
                {n.emisorFoto && (
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img src={n.emisorFoto} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}
