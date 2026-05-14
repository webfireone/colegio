import { getFotoGrupo } from '../../utils/fotos'
import { USUARIOS } from '../../utils/contenidoReal'

export function GaleriaGrid() {
  const fotosMock = USUARIOS.slice(0, 8).map((u, i) => ({
    id: `gf-${i}`,
    url: getFotoGrupo(),
    autor: u.nombre,
    like: i % 2 === 0,
  }))

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[var(--color-institucional)]">Fotos recientes</h2>
        <span className="text-sm text-[var(--color-texto-secundario)]">13 compañeros</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {fotosMock.map((foto) => (
          <button
            key={foto.id}
            className="aspect-square overflow-hidden rounded-lg bg-[var(--color-surface)] group relative hover:ring-2 hover:ring-[var(--color-celeste)] transition-all"
            aria-label={`Foto de ${foto.autor}`}
          >
            <img src={foto.url} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-2">
              <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {foto.autor}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
