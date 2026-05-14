import { useEffect } from 'react'
import { useFeed } from '../../hooks/useFeed'
import { PublicacionCard } from './PublicacionCard'
import { MomentosDelDia } from './MomentosDelDia'
import { SkeletonLoader } from '../ui/SkeletonLoader'
import { PLATAFORMA_INFO } from '../../utils/constantes'

export function FeedUnificado() {
  const { publicaciones, filtroPlataforma, cargando, setFiltro, cargarPublicaciones } = useFeed()

  useEffect(() => {
    cargarPublicaciones()
  }, [])

  return (
    <div>
      <MomentosDelDia />

      <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
        <button
          onClick={() => setFiltro(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            !filtroPlataforma
              ? 'bg-[var(--color-institucional)] text-white'
              : 'bg-[var(--color-surface)] text-[var(--color-texto)] hover:bg-[var(--color-surface-hover)]'
          }`}
        >
          🏠 Para ti
        </button>
        {(Object.entries(PLATAFORMA_INFO) as [string, typeof PLATAFORMA_INFO[keyof typeof PLATAFORMA_INFO]][]).map(([key, info]) => (
          <button
            key={key}
            onClick={() => setFiltro(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filtroPlataforma === key
                ? 'bg-[var(--color-institucional)] text-white'
                : 'bg-[var(--color-surface)] text-[var(--color-texto)] hover:bg-[var(--color-surface-hover)]'
            }`}
            style={filtroPlataforma === key ? { backgroundColor: info.color } : {}}
          >
            {info.icono} {info.nombre}
          </button>
        ))}
      </div>

      {cargando && publicaciones.length === 0 ? (
        <SkeletonLoader count={3} />
      ) : publicaciones.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-4xl mb-3">📭</p>
          <p className="text-[var(--color-texto-secundario)]">No hay publicaciones aún</p>
          <p className="text-sm text-[var(--color-texto-secundario)]">¡Sé el primero en compartir algo!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {publicaciones.map((pub) => (
            <PublicacionCard key={pub.id} publicacion={pub} />
          ))}
        </div>
      )}
    </div>
  )
}
