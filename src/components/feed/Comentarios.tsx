import { useState } from 'react'
import { Comentario } from '../../types'
import { formatearFecha } from '../../utils/formatos'

interface ComentariosProps {
  comentarios: Comentario[]
  onComentar: (texto: string) => void
}

export function Comentarios({ comentarios, onComentar }: ComentariosProps) {
  const [nuevoComentario, setNuevoComentario] = useState('')
  const [expanded, setExpanded] = useState(false)

  const visibles = expanded ? comentarios : comentarios.slice(0, 2)
  const ocultos = comentarios.length - 2

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nuevoComentario.trim()) {
      onComentar(nuevoComentario.trim())
      setNuevoComentario('')
    }
  }

  return (
    <div className="space-y-3">
      {comentarios.length > 2 && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="text-sm text-[var(--color-celeste)] hover:underline"
        >
          Ver los {comentarios.length} comentarios
        </button>
      )}

      {visibles.map((c) => (
        <div key={c.id} className="flex gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[var(--color-crema)]">
            {c.autorFoto ? (
              <img src={c.autorFoto} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="flex items-center justify-center w-full h-full text-xs font-bold text-[var(--color-texto-secundario)]">
                {c.autorNombre.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="bg-[var(--color-crema)] rounded-lg px-3 py-2">
              <p className="font-semibold text-sm">{c.autorNombre}</p>
              <p className="text-sm text-[var(--color-texto)]">{c.texto}</p>
              {c.imagen && (
                <img src={c.imagen} alt="" className="mt-2 rounded-lg max-w-[200px]" />
              )}
            </div>
            <p className="text-xs text-[var(--color-texto-secundario)] mt-0.5 ml-1">
              {formatearFecha(c.fechaCreacion)}
            </p>
          </div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe un comentario..."
          className="flex-1 px-3 py-2 rounded-full bg-[var(--color-crema)] text-sm border-none focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
          aria-label="Nuevo comentario"
        />
        <button
          type="submit"
          disabled={!nuevoComentario.trim()}
          className="touch-target text-[var(--color-celeste)] disabled:opacity-40 font-semibold text-sm"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
