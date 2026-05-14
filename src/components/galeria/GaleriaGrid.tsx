import { useState } from 'react'
import { getFotoGrupo } from '../../utils/fotos'
import { USUARIOS } from '../../utils/contenidoReal'
import { ModalGlass } from '../ui/ModalGlass'

interface FotoItem {
  id: string
  url: string
  autor: string
  like: boolean
}

export function GaleriaGrid() {
  const fotosMock: FotoItem[] = USUARIOS.slice(0, 8).map((u, i) => ({
    id: `gf-${i}`,
    url: getFotoGrupo(),
    autor: u.nombre,
    like: i % 2 === 0,
  }))

  const [fotoSeleccionada, setFotoSeleccionada] = useState<FotoItem | null>(null)
  const [comentarios, setComentarios] = useState<Record<string, string[]>>({})
  const [nota, setNota] = useState('')

  const agregarComentario = () => {
    if (!fotoSeleccionada || !nota.trim()) return
    setComentarios((prev) => ({
      ...prev,
      [fotoSeleccionada.id]: [...(prev[fotoSeleccionada.id] ?? []), nota.trim()],
    }))
    setNota('')
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-institucional)]">Fotos recientes</h2>
          <p className="text-sm text-[var(--color-texto-secundario)]">Solo fotos, sin videos</p>
        </div>
        <span className="text-sm text-[var(--color-texto-secundario)]">{fotosMock.length} imágenes</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {fotosMock.map((foto) => (
          <button
            key={foto.id}
            type="button"
            onClick={() => setFotoSeleccionada(foto)}
            className="aspect-square overflow-hidden rounded-3xl bg-[var(--color-surface)] group relative hover:ring-2 hover:ring-[var(--color-celeste)] transition-all"
            aria-label={`Abrir foto de ${foto.autor}`}
          >
            <img src={foto.url} alt={`Foto de ${foto.autor}`} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-3">
              <div className="rounded-full bg-black/50 px-2 py-1 text-white text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {foto.autor}
              </div>
            </div>
          </button>
        ))}
      </div>

      <ModalGlass abierto={!!fotoSeleccionada} onClose={() => setFotoSeleccionada(null)} titulo="Foto y comentarios">
        {fotoSeleccionada && (
          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl bg-[var(--color-surface)]">
              <img src={fotoSeleccionada.url} alt={fotoSeleccionada.autor} className="w-full h-auto object-cover" />
            </div>
            <div className="flex flex-wrap gap-2">
              {['😊', '❤️', '👏', '😍', '😂', '👍'].map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setNota((prev) => prev + emoji)}
                  className="rounded-full border border-gray-200 px-3 py-2 text-sm hover:bg-[var(--color-celeste)]/10 transition"
                >
                  {emoji}
                </button>
              ))}
            </div>
            <textarea
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              placeholder="Escribí un comentario o suma un emoji..."
              rows={4}
              className="w-full rounded-3xl border border-gray-200 bg-white/90 px-4 py-3 text-sm outline-none focus:border-[var(--color-celeste)] focus:ring-2 focus:ring-[var(--color-celeste)]/40"
            />
            <button
              type="button"
              onClick={agregarComentario}
              className="w-full rounded-3xl bg-[var(--color-institucional)] py-3 text-sm font-semibold text-white hover:bg-[var(--color-celeste)] transition-colors"
            >
              Agregar comentario
            </button>

            {comentarios[fotoSeleccionada.id] && comentarios[fotoSeleccionada.id].length > 0 && (
              <div className="space-y-2 rounded-3xl border border-gray-200 bg-white/90 p-4 text-sm text-gray-700">
                <p className="font-semibold text-[var(--color-institucional)]">Comentarios</p>
                <div className="space-y-2">
                  {comentarios[fotoSeleccionada.id].map((comentario, index) => (
                    <div key={`${fotoSeleccionada.id}-${index}`} className="rounded-2xl bg-[#f8fafc] px-3 py-2">
                      {comentario}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </ModalGlass>
    </div>
  )
}
