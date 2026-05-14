export interface Mensaje {
  id: string
  conversacionId: string
  emisorId: string
  emisorNombre: string
  emisorFoto?: string
  tipo: 'texto' | 'imagen' | 'video' | 'audio' | 'ubicacion' | 'archivo'
  contenido?: string
  archivoUrl?: string
  duracionAudio?: number
  ubicacion?: { lat: number; lng: number }
  leido: boolean
  fechaEnvio: number
}

export type TipoConversacion = 'individual' | 'grupal' | 'broadcast'

export interface Conversacion {
  id: string
  participantes: string[]
  tipo: TipoConversacion
  nombre?: string
  fotoGrupo?: string
  ultimoMensaje?: string
  ultimoMensajeAutor?: string
  ultimaActividad: number
  noLeidos: number
  fijado: boolean
  silenciadoHasta?: number
}
