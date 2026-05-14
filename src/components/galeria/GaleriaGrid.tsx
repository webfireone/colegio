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

      <ModalGlass abierto={!!fotoSeleccionada} onClose={() => setFotoSeleccionada(null)} titulo={fotoSeleccionada ? `Foto de ${fotoSeleccionada.autor}` : 'Foto'}>
        {fotoSeleccionada && (
          <div className="grid gap-5 lg:grid-cols-[1.45fr_0.95fr]">
            <div className="overflow-hidden rounded-[32px] bg-[var(--color-surface)] shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
              <img
                src={fotoSeleccionada.url}
                alt={fotoSeleccionada.autor}
                className="w-full h-[min(60vh,680px)] object-cover"
              />
              <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#071020]/90 px-5 py-4">
                <div>
                  <p className="text-xs text-[var(--color-texto-secundario)]">Compartido por</p>
                  <p className="text-sm font-semibold text-white">{fotoSeleccionada.autor}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span className="flex items-center gap-1"><span>❤️</span> 128</span>
                  <span className="flex items-center gap-1"><span>💬</span> {comentarios[fotoSeleccionada.id]?.length ?? 0}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[32px] bg-[#071026] border border-white/10 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-celeste)]/15 text-xl text-white/80">
                    {fotoSeleccionada.autor.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{fotoSeleccionada.autor}</p>
                    <p className="text-xs text-[var(--color-texto-secundario)]">Galería de la promo</p>
                  </div>
                </div>

                <div className="space-y-3 max-h-[46vh] overflow-y-auto pr-1 text-sm text-white/80">
                  {comentarios[fotoSeleccionada.id]?.length ? (
                    comentarios[fotoSeleccionada.id].map((comentario, index) => (
                      <div key={`${fotoSeleccionada.id}-${index}`} className="rounded-3xl border border-white/10 bg-white/5 p-3">
                        <p className="text-sm leading-6">{comentario}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[var(--color-texto-secundario)]">Sé el primero en dejar un comentario sobre esta foto.</p>
                  )}
                </div>
              </div>

              <div className="rounded-[32px] bg-[#071026] border border-white/10 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {['😊', '❤️', '👏', '😍', '😂', '👍'].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setNota((prev) => prev + emoji)}
                      className="rounded-2xl border border-white/10 bg-white/5 py-3 text-lg transition hover:bg-white/10"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
                <textarea
                  value={nota}
                  onChange={(e) => setNota(e.target.value)}
                  placeholder="Escribí tu comentario..."
                  rows={4}
                  className="w-full rounded-3xl border border-white/10 bg-[#0f172c] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--color-celeste)] focus:ring-2 focus:ring-[var(--color-celeste)]/30"
                />
                <button
                  type="button"
                  onClick={agregarComentario}
                  className="mt-4 w-full rounded-3xl bg-[var(--color-institucional)] py-3 text-sm font-semibold text-white hover:bg-[var(--color-celeste)] transition-colors"
                >
                  Publicar comentario
                </button>
              </div>
            </div>
          </div>
        )}
      </ModalGlass>
    </div>
  )
}
