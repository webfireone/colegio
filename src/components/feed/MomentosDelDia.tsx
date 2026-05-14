import { USUARIOS } from '../../utils/contenidoReal'

export function MomentosDelDia() {
  const historias = USUARIOS.slice(0, 8).map((u, i) => ({
    id: `h-${u.id}`,
    nombre: u.nombre.split(' ')[0],
    foto: `https://api.dicebear.com/7.x/avataaars/svg?seed=${u.nombre}`,
    visto: i % 3 === 0,
  }))

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 mb-4 snap-x snap-mandatory scrollbar-none">
      <button className="flex flex-col items-center gap-1 flex-shrink-0 snap-start" aria-label="Agregar historia">
        <div className="w-16 h-16 rounded-full border-2 border-dashed border-[var(--color-celeste)] flex items-center justify-center text-2xl text-[var(--color-celeste)]">
          +
        </div>
        <span className="text-[10px] text-[var(--color-texto-secundario)]">Nuevo</span>
      </button>

      {historias.map((h) => (
        <button key={h.id} className="flex flex-col items-center gap-1 flex-shrink-0 snap-start" aria-label={`Historia de ${h.nombre}`}>
          <div className={`w-16 h-16 rounded-full overflow-hidden border-2 ${h.visto ? 'border-gray-300' : 'border-[var(--color-celeste)]'}`}>
            {h.foto ? (
              <img src={h.foto} alt={h.nombre} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center text-white text-xs font-bold">
                {h.nombre.slice(0, 2)}
              </div>
            )}
          </div>
          <span className="text-[10px] text-[var(--color-texto-secundario)] truncate max-w-[64px]">{h.nombre}</span>
        </button>
      ))}
    </div>
  )
}
