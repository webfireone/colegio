import { getFotoPerfil, getFotoGrupo } from '../../utils/fotos'
import { USUARIOS, PUBLICACIONES } from '../../utils/contenidoReal'

export function Videoteca() {
  const videosMock = PUBLICACIONES
    .filter((p) => p.plataforma === 'youtube')
    .slice(0, 6)
    .map((p, i) => {
      const autor = USUARIOS.find((u) => u.id === p.autorId)!
      return {
        id: `vid-${i}`,
        titulo: p.contenido?.slice(0, 60) ?? 'Video sin título',
        autor: autor.nombre,
        autorFoto: getFotoPerfil(autor.nombre),
        thumbnail: getFotoGrupo(),
        duracion: `${Math.floor(Math.random() * 18) + 3}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}`,
        visitas: Math.floor(Math.random() * 150) + 15,
      }
    })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {videosMock.map((v, i) => (
        <article
          key={v.id}
          className="glass-card rounded-2xl overflow-hidden group hover-lift"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={v.thumbnail}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#080b14]/20 group-hover:bg-[#080b14]/10 transition-colors duration-500" />

            {/* Ambient glow on hover */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-celeste)]/10 via-transparent to-[var(--color-dorado)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 shadow-glow group-hover:scale-110 group-hover:bg-white/15">
                <span className="text-white text-2xl ml-0.5 drop-shadow-lg">▶</span>
              </div>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-2 right-2 bg-[#080b14]/80 backdrop-blur-sm text-white/80 text-[10px] px-2 py-0.5 rounded-md border border-white/10 font-medium">
              {v.duracion}
            </div>

            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-celeste)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Info */}
          <div className="p-3.5 space-y-2">
            <h3 className="font-semibold text-sm leading-snug text-white/90 line-clamp-2 group-hover:text-white transition-colors">
              {v.titulo}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-white/10 ring-1 ring-[var(--color-celeste)]/20 flex-shrink-0">
                <img src={v.autorFoto} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/60 truncate">{v.autor}</p>
                <p className="text-[10px] text-white/40">{v.visitas} vistas</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
