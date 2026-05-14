import { VisibilidadPerfil } from './usuario'

export type Plataforma = 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'whatsapp'
export type TipoReaccion = 'like' | 'encanta' | 'divierte' | 'asombra' | 'entristece' | 'enoja'

export interface Comentario {
  id: string
  autorId: string
  autorNombre: string
  autorFoto?: string
  texto: string
  imagen?: string
  gif?: string
  reacciones: Record<TipoReaccion, string[]>
  respuestas?: Comentario[]
  fechaCreacion: number
}

export interface Publicacion {
  id: string
  autorId: string
  autorNombre: string
  autorFoto?: string
  plataforma: Plataforma
  contenido?: string
  imagenes?: string[]
  videos?: string[]
  filtro?: string
  etiquetas?: string[]
  hashtags?: string[]
  visibilidad: VisibilidadPerfil
  reacciones: Record<TipoReaccion, string[]>
  comentarios: Comentario[]
  compartidoDesde?: string
  fechaCreacion: number
  editado: boolean
}
