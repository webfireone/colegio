import { USUARIOS } from '../../utils/contenidoReal'

export function ComunidadesList() {
  const gruposMock = [
    { id: 'g1', nombre: 'Promoción 86', miembros: USUARIOS.length, pendiente: false },
    { id: 'g2', nombre: 'Viajes y Aventuras', miembros: 8, pendiente: false },
    { id: 'g3', nombre: 'Recetas Compartidas', miembros: 6, pendiente: false },
    { id: 'g4', nombre: 'Ayuda Mutua', miembros: 5, pendiente: true },
    { id: 'g5', nombre: 'Música de los 80', miembros: 9, pendiente: false },
    { id: 'g6', nombre: 'Asados de la Promo', miembros: 7, pendiente: false },
  ]

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-[var(--color-institucional)]">Comunidades</h2>
        <button className="px-4 py-2 rounded-full bg-[var(--color-institucional)] text-white text-sm font-medium hover:bg-[var(--color-institucional-light)] transition-colors">
          + Nuevo grupo
        </button>
      </div>

      {gruposMock.map((g) => (
        <div key={g.id} className="bg-white rounded-xl p-4 shadow-[var(--shadow-card)] flex items-center gap-3 hover:shadow-[var(--shadow-elevated)] transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
            {g.nombre.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm">{g.nombre}</p>
            <p className="text-xs text-[var(--color-texto-secundario)]">{g.miembros} miembros</p>
          </div>
          {g.pendiente && (
            <span className="px-3 py-1 rounded-full bg-[var(--color-advertencia)]/10 text-[var(--color-advertencia)] text-xs font-medium">
              Pendiente
            </span>
          )}
          <button className="touch-target text-xl" aria-label={`Ir a ${g.nombre}`}>
            ➡️
          </button>
        </div>
      ))}
    </div>
  )
}
