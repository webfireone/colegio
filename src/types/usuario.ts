export type EstadoCivil = 'soltero/a' | 'casado/a' | 'divorciado/a' | 'viudo/a' | 'no especifica'
export type VisibilidadPerfil = 'solo_companieros' | 'grupo_curso' | 'publico_interno'
export type RolUsuario = 'exalumno' | 'moderador' | 'admin'

export interface Usuario {
  id: string
  email: string
  nombreCompleto: string
  alias?: string
  apellidoSoltera?: string
  telefono?: string
  anioEgreso: number
  fechaNacimiento?: string
  biografia?: string
  fotoPerfil?: string
  fotoPortada?: string
  ubicacion: {
    ciudad?: string
    provincia?: string
    pais?: string
  }
  estadoCivil?: EstadoCivil
  profesion?: string
  hobbies?: string[]
  musicaFavorita?: string
  fraseEmblema?: string
  amigos: string[]
  seguidores: string[]
  seguidos: string[]
  privacidad: VisibilidadPerfil
  rol: RolUsuario
  debeCambiarClave?: boolean
  ultimoAcceso?: number
  online: boolean
  esConmemorativo: boolean
  fechaCreacion: number
}

export interface UsuarioFormData {
  nombreCompleto: string
  alias?: string
  apellidoSoltera?: string
  telefono?: string
  anioEgreso?: number
  biografia?: string
  fotoPerfil?: string
  fotoPortada?: string
  ubicacion: { ciudad?: string; provincia?: string; pais?: string }
  estadoCivil?: EstadoCivil
  profesion?: string
  hobbies?: string[]
  musicaFavorita?: string
  fraseEmblema?: string
  privacidad?: VisibilidadPerfil
}
