import { create } from 'zustand'
import { Conversacion, Mensaje } from '../types'

interface ChatState {
  conversaciones: Conversacion[]
  mensajes: Record<string, Mensaje[]>
  conversacionActiva: string | null
  cargando: boolean
  seleccionarConversacion: (id: string) => void
  enviarMensaje: (conversacionId: string, mensaje: Mensaje) => void
  marcarLeido: (conversacionId: string) => void
  cargarConversaciones: () => void
  cargarMensajes: (conversacionId: string) => void
}

export const useChatStore = create<ChatState>((set, get) => ({
  conversaciones: [],
  mensajes: {},
  conversacionActiva: null,
  cargando: false,

  seleccionarConversacion: (id) => set({ conversacionActiva: id }),

  enviarMensaje: (conversacionId, mensaje) =>
    set((state) => {
      const convActual = state.conversaciones.find((c) => c.id === conversacionId)
      const actualizadas = convActual
        ? state.conversaciones.map((c) =>
            c.id === conversacionId
              ? { ...c, ultimoMensaje: mensaje.contenido, ultimaActividad: mensaje.fechaEnvio, noLeidos: 0 }
              : c
          )
        : [...state.conversaciones, {
            id: conversacionId,
            participantes: [mensaje.emisorId],
            tipo: 'individual' as const,
            nombre: mensaje.emisorNombre,
            fotoGrupo: undefined,
            ultimoMensaje: mensaje.contenido,
            ultimoMensajeAutor: mensaje.emisorNombre,
            ultimaActividad: mensaje.fechaEnvio,
            noLeidos: 0,
            fijado: false,
            silenciadoHasta: undefined,
          }]
      return {
        mensajes: {
          ...state.mensajes,
          [conversacionId]: [...(state.mensajes[conversacionId] || []), mensaje],
        },
        conversaciones: actualizadas,
      }
    }),

  marcarLeido: (conversacionId) =>
    set((state) => ({
      conversaciones: state.conversaciones.map((c) =>
        c.id === conversacionId ? { ...c, noLeidos: 0 } : c
      ),
    })),

  cargarConversaciones: () => {
    set({ conversaciones: [] })
  },

  cargarMensajes: (_conversacionId) => {
    set({ cargando: false, mensajes: {} })
  },
}))
