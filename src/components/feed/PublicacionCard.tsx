import { Publicacion } from '../../types'
import { formatearFecha } from '../../utils/formatos'
import { PLATAFORMA_INFO } from '../../utils/constantes'
import { Reacciones } from './Reacciones'
import { Comentarios } from './Comentarios'
import { useFeedStore } from '../../store/feedStore'
import { useAuthStore } from '../../store/authStore'
import { useState } from 'react'

interface PubCardProps {
  publicacion: Publicacion
}

export function PublicacionCard({ publicacion }: PubCardProps) {
  const agregarReaccion = useFeedStore((s) => s.agregarReaccion)
  const agregarComentarioStore = useFeedStore((s) => s.agregarComentario)
  const usuario = useAuthStore((s) => s.usuario)
  const [imagenActual, setImagenActual] = useState(0)

  const plataforma = PLATAFORMA_INFO[publicacion.plataforma]
  const filtroCSS = {
    vintage: 'sepia(0.5) contrast(1.1)',
    sepia: 'sepia(0.8)',
    byn: 'grayscale(1) contrast(1.2)',
    retro80: 'sepia(0.4) saturate(1.3) hue-rotate(-10deg)',
    ninguno: 'none',
  }[publicacion.filtro ?? 'ninguno']

  const handleReaccionar = (tipo: string) => {
    if (usuario) agregarReaccion(publicacion.id, usuario.id, tipo)
  }

  const handleComentar = (texto: string) => {
    if (!usuario) return
    agregarComentarioStore(publicacion.id, {
      id: `c-${Date.now()}`,
      autorId: usuario.id,
      autorNombre: usuario.nombreCompleto,
      autorFoto: usuario.fotoPerfil,
      texto,
      reacciones: { like: [], encanta: [], divierte: [], asombra: [], entristece: [], enoja: [] },
      fechaCreacion: Date.now(),
    })
  }

  return (
    <article className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-crema)] flex-shrink-0">
            {publicacion.autorFoto ? (
              <img src={publicacion.autorFoto} alt={publicacion.autorNombre} className="w-full h-full object-cover" />
            ) : (
              <span className="flex items-center justify-center w-full h-full bg-[var(--color-institucional)] text-white text-xs font-bold">
                {publicacion.autorNombre.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm leading-tight">{publicacion.autorNombre}</p>
            <div className="flex items-center gap-1 text-xs text-[var(--color-texto-secundario)]">
              <span>{formatearFecha(publicacion.fechaCreacion)}</span>
              <span>·</span>
              <span style={{ color: plataforma.color }}>{plataforma.icono} {plataforma.nombre}</span>
            </div>
          </div>
        </div>

        {publicacion.contenido && (
          <p className="text-sm mb-3 whitespace-pre-wrap">{publicacion.contenido}</p>
        )}

        {publicacion.hashtags && publicacion.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {publicacion.hashtags.map((tag) => (
              <span key={tag} className="text-xs text-[var(--color-celeste)]">#{tag}</span>
            ))}
          </div>
        )}

        {publicacion.imagenes && publicacion.imagenes.length > 0 && (
          <div className="relative mb-3">
            {publicacion.imagenes.length > 1 && (
              <div className="flex gap-1 overflow-x-auto pb-1 snap-x snap-mandatory">
                {publicacion.imagenes.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="snap-start flex-shrink-0 w-full max-h-96 object-cover rounded-lg"
                    style={{ filter: filtroCSS }}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
            {publicacion.imagenes.length === 1 && (
              <img
                src={publicacion.imagenes[0]}
                alt=""
                className="w-full max-h-96 object-cover rounded-lg"
                style={{ filter: filtroCSS }}
                loading="lazy"
              />
            )}
          </div>
        )}

        {publicacion.videos && publicacion.videos.length > 0 && (
          <div className="mb-3">
            <video
              src={publicacion.videos[0]}
              controls
              preload="metadata"
              className="w-full rounded-lg"
              style={{ maxHeight: publicacion.plataforma === 'tiktok' ? '70vh' : '400px' }}
              playsInline
            >
              Tu navegador no soporta video.
            </video>
          </div>
        )}

        <div className="border-t border-[var(--color-crema)] pt-3 space-y-3">
          <Reacciones
            reacciones={publicacion.reacciones}
            onReaccionar={handleReaccionar}
            usuarioId={publicacion.autorId}
          />
          <Comentarios
            comentarios={publicacion.comentarios}
            onComentar={handleComentar}
          />
        </div>
      </div>
    </article>
  )
}
