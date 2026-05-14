import { USUARIOS, PUBLICACIONES } from '../../utils/contenidoReal'

export function Videoteca() {
  const videosMock = PUBLICACIONES
    .filter((p) => p.plataforma === 'youtube')
    .slice(0, 4)
    .map((p, i) => {
      const autor = USUARIOS.find((u) => u.id === p.autorId)!
      return {
        id: `vid-${i}`,
        titulo: p.contenido?.slice(0, 50) ?? 'Video sin título',
        autor: autor.nombre,
        duracion: `${Math.floor(Math.random() * 20) + 5}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}`,
        visitas: Math.floor(Math.random() * 80) + 10,
        thumbnail: '',
      }
    })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {videosMock.map((v) => (
        <div key={v.id} className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
          <div className="aspect-video bg-gray-800 relative flex items-center justify-center">
            <span className="text-4xl">📺</span>
            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
              {v.duracion}
            </span>
          </div>
          <div className="p-3">
            <p className="font-semibold text-sm line-clamp-2">{v.titulo}</p>
            <p className="text-xs text-[var(--color-texto-secundario)] mt-1">
              {v.autor} · {v.visitas} vistas
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
