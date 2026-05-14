export interface Evento {
  id: string
  titulo: string
  descripcion?: string
  fecha: number
  lugar?: string
  ubicacion?: { lat: number; lng: number }
  organizadorId: string
  organizadorNombre: string
  confirmados: string[]
  rechazados: string[]
  pendientes: string[]
  menuEspecial?: ('celiaco' | 'vegetariano')[]
  fechaCreacion: number
}
