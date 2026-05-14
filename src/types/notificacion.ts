import { Plataforma } from './publicacion'

export interface Notificacion {
  id: string
  usuarioId: string
  tipo: 'reaccion' | 'comentario' | 'mencion' | 'mensaje' | 'video_subido' | 'evento_proximo' | 'solicitud_amistad' | 'cumpleanios'
  plataforma: Plataforma
  mensaje: string
  referenciaId?: string
  emisorId?: string
  emisorNombre?: string
  emisorFoto?: string
  leida: boolean
  fechaCreacion: number
}
