import { EVENTOS } from '../../utils/contenidoReal'

export function EventosCalendario() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-institucional)]">Eventos</h2>

      {EVENTOS.map((e) => (
        <div key={e.id} className="bg-white rounded-xl p-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-sm">{e.titulo}</h3>
              <p className="text-xs text-[var(--color-texto-secundario)] mt-1">📅 {e.fecha}</p>
              <p className="text-xs text-[var(--color-texto-secundario)]">📍 {e.lugar}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[var(--color-exito)]/10 text-[var(--color-exito)] text-xs font-medium">
              ✅ {e.confirmados} confirmados
            </span>
          </div>

          {e.menuEspecial.length > 0 && (
            <div className="flex gap-2 mt-2">
              {e.menuEspecial.map((m) => (
                <span key={m} className="px-2 py-0.5 rounded-full bg-[var(--color-dorado)]/10 text-[var(--color-dorado)] text-[10px] font-medium">
                  {m === 'celiaco' ? '🌾 Sin gluten' : '🥦 Vegetariano'}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-2 mt-3">
            <button className="flex-1 py-2 rounded-lg bg-[var(--color-exito)] text-white text-sm font-semibold hover:bg-green-700 transition-colors">
              ✅ Confirmar asistencia
            </button>
            <button className="flex-1 py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">
              ❌ No asistiré
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
