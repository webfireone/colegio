import { VisibilidadPerfil } from './usuario'

export interface Album {
  id: string
  propietarioId: string
  titulo: string
  descripcion?: string
  fotos: string[]
  portada?: string
  visibilidad: VisibilidadPerfil
  fechaCreacion: number
}
