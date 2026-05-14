import { TipoReaccion, Comentario } from './publicacion'

export interface Video {
  id: string
  autorId: string
  autorNombre: string
  autorFoto?: string
  titulo: string
  descripcion?: string
  url: string
  thumbnail?: string
  tipo: 'corto' | 'largo' | 'vivo'
  duracion: number
  playlistId?: string
  visitas: number
  reacciones: Record<TipoReaccion, string[]>
  comentarios: Comentario[]
  sonidoOriginal?: string
  hashtags?: string[]
  fechaSubida: number
}
