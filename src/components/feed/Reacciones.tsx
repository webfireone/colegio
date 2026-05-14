import { useState } from 'react'
import { TipoReaccion, REACCIONES } from '../../types'

interface ReaccionesProps {
  reacciones: Record<string, string[]>
  onReaccionar: (tipo: string) => void
  usuarioId: string
  size?: 'sm' | 'md'
}

export function Reacciones({ reacciones, onReaccionar, usuarioId, size = 'sm' }: ReaccionesProps) {
  const [mostrarSelector, setMostrarSelector] = useState(false)
  const total = Object.values(reacciones).reduce((acc, arr) => acc + arr.length, 0)
  const reacciono = Object.entries(reacciones).some(([, arr]) => arr.includes(usuarioId))

  const topReacciones = (Object.entries(REACCIONES) as [TipoReaccion, { emoji: string; label: string }][])
    .filter(([tipo]) => (reacciones[tipo]?.length ?? 0) > 0)
    .slice(0, 3)

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        {topReacciones.length > 0 && (
          <div className="flex -space-x-1">
            {topReacciones.map(([tipo, info]) => (
              <span
                key={tipo}
                className={`text-sm ${size === 'md' ? 'text-base' : ''} ${reacciones[tipo]?.includes(usuarioId) ? 'scale-110' : ''}`}
                title={info.label}
              >
                {info.emoji}
              </span>
            ))}
          </div>
        )}
        {total > 0 && (
          <span className="text-xs text-[var(--color-texto-secundario)]">{total}</span>
        )}

        <button
          onClick={() => setMostrarSelector(!mostrarSelector)}
          className={`ml-auto text-sm font-medium transition-colors touch-target ${
            reacciono ? 'text-[var(--color-celeste)]' : 'text-[var(--color-texto-secundario)] hover:text-[var(--color-celeste)]'
          }`}
          aria-label="Reaccionar"
        >
          {reacciono ? '👍 Te gusta' : '👍 Me gusta'}
        </button>
      </div>

      {mostrarSelector && (
        <div className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-lg border p-2 flex gap-1 z-10" role="toolbar" aria-label="Reacciones">
          {(Object.entries(REACCIONES) as [TipoReaccion, { emoji: string; label: string }][]).map(([tipo, info]) => (
            <button
              key={tipo}
              onClick={() => { onReaccionar(tipo); setMostrarSelector(false) }}
              className="touch-target text-xl hover:scale-125 transition-transform"
              title={info.label}
              aria-label={info.label}
            >
              {info.emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
