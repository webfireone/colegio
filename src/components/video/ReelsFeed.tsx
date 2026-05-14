import { getFotoPerfil, getFotoGrupo } from '../../utils/fotos'
import { USUARIOS, PUBLICACIONES } from '../../utils/contenidoReal'

export function ReelsFeed() {
  const reelsMock = PUBLICACIONES
    .filter((p) => p.plataforma === 'tiktok')
    .slice(0, 6)
    .map((p, i) => {
      const autor = USUARIOS.find((u) => u.id === p.autorId)!
      return {
        id: `reel-${i}`,
        autor: autor.nombre,
        autorFoto: getFotoPerfil(autor.nombre),
        thumbnail: getFotoGrupo(),
        descripcion: p.contenido ?? '',
        musica: `${autor.nombre.split(' ')[0]} ♪ ${['Un año de amor', 'Amor eterno', 'El tiempo es veloz', 'Tú y yo', 'Sueños compartidos'][i % 5]}`,
        likes: Math.floor(Math.random() * 45) + 8,
        comentarios: Math.floor(Math.random() * 12) + 1,
      }
    })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {reelsMock.map((reel, i) => (
        <article
          key={reel.id}
          className="glass-card rounded-2xl overflow-hidden group hover-lift"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="relative aspect-[9/14] overflow-hidden">
            <img
              src={reel.thumbnail}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-institucional)]/10 via-transparent to-[var(--color-dorado)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-glow">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
            </div>

            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-celeste)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 ring-2 ring-[var(--color-celeste)]/30 flex-shrink-0">
                  <img src={reel.autorFoto} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-medium drop-shadow-lg">{reel.autor}</span>
              </div>
              <p className="text-white/80 text-xs leading-relaxed line-clamp-2 drop-shadow-lg">
                {reel.descripcion}
              </p>
              <p className="text-white/50 text-[10px] mt-1.5 truncate drop-shadow-lg">
                🎵 {reel.musica}
              </p>
              <div className="flex items-center gap-3 mt-2 text-white/60 text-[10px]">
                <span className="flex items-center gap-1">❤️ <span className="font-medium text-white/80">{reel.likes}</span></span>
                <span className="flex items-center gap-1">💬 <span className="font-medium text-white/80">{reel.comentarios}</span></span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
