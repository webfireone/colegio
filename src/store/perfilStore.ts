import { create } from 'zustand'
import { Usuario, UsuarioFormData } from '../types'
import { getFotoPerfil } from '../utils/fotos'
import { USUARIOS } from '../utils/contenidoReal'

interface PerfilState {
  perfilActual: Usuario | null
  perfilesVistos: Record<string, Usuario>
  cargando: boolean
  cargarPerfil: (id: string) => void
  actualizarPerfil: (data: UsuarioFormData) => void
  limpiarPerfil: () => void
}

export const usePerfilStore = create<PerfilState>((set) => ({
  perfilActual: null,
  perfilesVistos: {},
  cargando: false,

  cargarPerfil: (id) => {
    set({ cargando: true })
    const mockUsuarios: Record<string, Usuario> = {}
    for (const u of USUARIOS) {
      mockUsuarios[u.id] = {
        id: u.id,
        email: u.email,
        nombreCompleto: u.nombre,
        telefono: u.telefono,
        anioEgreso: 1986,
        biografia: `${u.profesion}. Amante de ${u.hobbies.slice(0, 2).join(' y ')}. Feliz de reencontrarme con la promo después de 40 años.`,
        profesion: u.profesion,
        fotoPerfil: getFotoPerfil(u.nombre),
        fotoPortada: [
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
        ][Math.floor(Math.random() * 3)],
        ubicacion: { ciudad: u.ciudad, pais: 'Argentina' },
        estadoCivil: u.estado as any,
        hobbies: u.hobbies,
        musicaFavorita: u.musica,
        fraseEmblema: u.frase,
        amigos: USUARIOS.filter((a) => a.id !== u.id).map((a) => a.id),
        seguidores: [],
        seguidos: [],
        privacidad: 'solo_companieros',
        rol: 'exalumno',
        online: Math.random() > 0.5,
        esConmemorativo: false,
        fechaCreacion: Date.now(),
      }
    }
    const perfil = mockUsuarios[id] || {
      id, email: '', nombreCompleto: 'Usuario', anioEgreso: 1986,
      amigos: [], seguidores: [], seguidos: [],
      ubicacion: {}, privacidad: 'solo_companieros' as const, rol: 'exalumno' as const,
      online: false, esConmemorativo: false, fechaCreacion: Date.now(),
    }
    set((state) => ({
      perfilesVistos: { ...state.perfilesVistos, [id]: perfil },
      perfilActual: perfil,
      cargando: false,
    }))
  },

  actualizarPerfil: (data) =>
    set((state) => ({
      perfilActual: state.perfilActual ? { ...state.perfilActual, ...data } : null,
    })),

  limpiarPerfil: () => set({ perfilActual: null }),
}))
