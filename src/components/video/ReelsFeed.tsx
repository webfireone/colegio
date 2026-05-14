import { getFotoPerfil } from '../../utils/fotos'
import { USUARIOS } from '../../utils/contenidoReal'
import { PUBLICACIONES } from '../../utils/contenidoReal'

export function ReelsFeed() {
  const reelsMock = PUBLICACIONES
    .filter((p) => p.plataforma === 'tiktok')
    .slice(0, 4)
    .map((p, i) => {
      const autor = USUARIOS.find((u) => u.id === p.autorId)!
      return {
        id: `reel-${i}`,
        autor: autor.nombre,
        autorFoto: getFotoPerfil(autor.nombre),
        descripcion: p.contenido ?? '',
        musica: `${autor.musica} - Tema de los 80`,
        likes: Math.floor(Math.random() * 30) + 5,
        comentarios: Math.floor(Math.random() * 8),
      }
    })

  return (
    <div className="space-y-4">
      {reelsMock.map((reel) => (
        <div key={reel.id} className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
          <div className="aspect-[9/16] bg-gray-900 relative flex items-center justify-center">
            <span className="text-6xl">🎬</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20">
                  {reel.autorFoto && <img src={reel.autorFoto} alt="" className="w-full h-full object-cover" />}
                </div>
                <span className="text-sm font-medium">{reel.autor}</span>
              </div>
              <p className="text-sm">{reel.descripcion}</p>
              <p className="text-xs opacity-70 mt-1">🎵 {reel.musica}</p>
              <div className="flex gap-4 mt-2 text-sm">
                <span>❤️ {reel.likes}</span>
                <span>💬 {reel.comentarios}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
