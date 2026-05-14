import { create } from 'zustand'
import { Notificacion } from '../types'

interface NotificacionState {
  notificaciones: Notificacion[]
  noLeidas: number
  cargando: boolean
  cargarNotificaciones: () => void
  marcarLeida: (id: string) => void
  marcarTodasLeidas: () => void
  agregarNotificacion: (notif: Notificacion) => void
}

export const useNotificacionStore = create<NotificacionState>((set) => ({
  notificaciones: [],
  noLeidas: 0,
  cargando: false,

  cargarNotificaciones: () => {
    const mock: Notificacion[] = [
      {
        id: 'n1', usuarioId: 'user-1',
        tipo: 'reaccion', plataforma: 'instagram',
        mensaje: 'A Juan Pérez le gusta tu foto',
        referenciaId: 'pub-2', emisorId: 'user-2',
        emisorNombre: 'Juan Pérez',
        emisorFoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan',
        leida: false, fechaCreacion: Date.now() - 600000,
      },
      {
        id: 'n2', usuarioId: 'user-1',
        tipo: 'comentario', plataforma: 'facebook',
        mensaje: 'Ana García comentó tu publicación',
        referenciaId: 'pub-1', emisorId: 'user-3',
        emisorNombre: 'Ana García',
        emisorFoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
        leida: false, fechaCreacion: Date.now() - 1800000,
      },
      {
        id: 'n3', usuarioId: 'user-1',
        tipo: 'evento_proximo', plataforma: 'facebook',
        mensaje: 'La Cena Anual de Exalumnos comienza en 3 días',
        referenciaId: 'event-1',
        leida: true, fechaCreacion: Date.now() - 86400000,
      },
      {
        id: 'n4', usuarioId: 'user-1',
        tipo: 'mensaje', plataforma: 'whatsapp',
        mensaje: 'Juan Pérez te envió un mensaje',
        emisorId: 'user-2', emisorNombre: 'Juan Pérez',
        emisorFoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan',
        leida: false, fechaCreacion: Date.now() - 300000,
      },
      {
        id: 'n5', usuarioId: 'user-1',
        tipo: 'cumpleanios', plataforma: 'facebook',
        mensaje: '🎂 Hoy es el cumpleaños de Carlos Rodríguez',
        emisorId: 'user-4', emisorNombre: 'Carlos Rodríguez',
        leida: true, fechaCreacion: Date.now() - 43200000,
      },
    ]
    const noLeidas = mock.filter((n) => !n.leida).length
    set({ notificaciones: mock, noLeidas, cargando: false })
  },

  marcarLeida: (id) =>
    set((state) => {
      const notificaciones = state.notificaciones.map((n) =>
        n.id === id ? { ...n, leida: true } : n
      )
      return {
        notificaciones,
        noLeidas: notificaciones.filter((n) => !n.leida).length,
      }
    }),

  marcarTodasLeidas: () =>
    set((state) => ({
      notificaciones: state.notificaciones.map((n) => ({ ...n, leida: true })),
      noLeidas: 0,
    })),

  agregarNotificacion: (notif) =>
    set((state) => ({
      notificaciones: [notif, ...state.notificaciones],
      noLeidas: state.noLeidas + 1,
    })),
}))
