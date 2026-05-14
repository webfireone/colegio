import { VisibilidadPerfil } from './usuario'

export interface Grupo {
  id: string
  nombre: string
  descripcion?: string
  fotoPortada?: string
  creadorId: string
  administradores: string[]
  miembros: string[]
  visibilidad: VisibilidadPerfil
  fechaCreacion: number
}
