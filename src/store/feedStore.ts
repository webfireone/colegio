import { create } from 'zustand'
import { Publicacion } from '../types'
import { Publicacion as PublicacionTipo } from '../types/publicacion'
import { getFotoPerfil } from '../utils/fotos'
import { USUARIOS, PUBLICACIONES } from '../utils/contenidoReal'

interface FeedState {
  publicaciones: PublicacionTipo[]
  filtroPlataforma: string | null
  cargando: boolean
  setFiltro: (plataforma: string | null) => void
  agregarPublicacion: (pub: PublicacionTipo) => void
  agregarReaccion: (pubId: string, userId: string, tipo: string) => void
  agregarComentario: (pubId: string, comentario: Publicacion['comentarios'][0]) => void
  cargarPublicaciones: () => void
}

export const useFeedStore = create<FeedState>((set, get) => ({
  publicaciones: [],
  filtroPlataforma: null,
  cargando: false,

  setFiltro: (plataforma) => set({ filtroPlataforma: plataforma }),

  agregarPublicacion: (pub) =>
    set((state) => ({ publicaciones: [pub, ...state.publicaciones] })),

  agregarReaccion: (pubId, userId, tipo) =>
    set((state) => ({
      publicaciones: state.publicaciones.map((p) =>
        p.id === pubId
          ? { ...p, reacciones: { ...p.reacciones, [tipo]: [...(p.reacciones[tipo as keyof typeof p.reacciones] || []), userId] } }
          : p
      ),
    })),

  agregarComentario: (pubId, comentario) =>
    set((state) => ({
      publicaciones: state.publicaciones.map((p) =>
        p.id === pubId
          ? { ...p, comentarios: [...p.comentarios, comentario] }
          : p
      ),
    })),

  cargarPublicaciones: () => {
    set({ cargando: true })
    const mock: PublicacionTipo[] = PUBLICACIONES.map((p, i) => {
      const autor = USUARIOS.find((u) => u.id === p.autorId)!
      const otros = USUARIOS.filter((u) => u.id !== p.autorId)
      const reacciones: Record<string, string[]> = {}
      // Cada publicación tiene reacciones aleatorias de 1-4 compañeros
      const numReacciones = Math.floor(Math.random() * 4) + 1
      const reaccionesPosibles = ['like', 'encanta', 'divierte', 'asombra', 'entristece', 'enoja']
      for (let r = 0; r < numReacciones; r++) {
        const tipo = reaccionesPosibles[Math.floor(Math.random() * reaccionesPosibles.length)]
        const usuario = otros[Math.floor(Math.random() * otros.length)]
        if (!reacciones[tipo]) reacciones[tipo] = []
        reacciones[tipo].push(usuario.id)
      }
      return {
        id: `pub-real-${i}`,
        autorId: p.autorId,
        autorNombre: autor.nombre,
        autorFoto: getFotoPerfil(autor.nombre),
        plataforma: p.plataforma,
        contenido: p.contenido,
        imagenes: p.imagenes,
        videos: p.videos,
        filtro: p.filtro,
        hashtags: p.hashtags,
        visibilidad: 'solo_companieros' as const,
        reacciones,
        comentarios: i === 0 ? [{
          id: `c-real-${i}`,
          autorId: otros[0].id,
          autorNombre: otros[0].nombre,
          autorFoto: getFotoPerfil(otros[0].nombre),
          texto: '¡Qué hermoso recuerdo! Me encanta ❤️',
          reacciones: { like: [otros[1]?.id].filter(Boolean), encanta: [], divierte: [], asombra: [], entristece: [], enoja: [] },
          fechaCreacion: Date.now() - 1800000,
        }] : [],
        fechaCreacion: Date.now() - i * 3600000 - Math.random() * 3600000,
        editado: false,
      }
    })
    set({ publicaciones: mock, cargando: false })
  },
}))
