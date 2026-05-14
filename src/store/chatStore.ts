import { create } from 'zustand'
import { Conversacion, Mensaje } from '../types'
import { getFotoPerfil } from '../utils/fotos'
import { USUARIOS, MENSAJES_CHAT } from '../utils/contenidoReal'

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
    set((state) => ({
      mensajes: {
        ...state.mensajes,
        [conversacionId]: [...(state.mensajes[conversacionId] || []), mensaje],
      },
      conversaciones: state.conversaciones.map((c) =>
        c.id === conversacionId
          ? { ...c, ultimoMensaje: mensaje.contenido, ultimaActividad: mensaje.fechaEnvio, noLeidos: 0 }
          : c
      ),
    })),

  marcarLeido: (conversacionId) =>
    set((state) => ({
      conversaciones: state.conversaciones.map((c) =>
        c.id === conversacionId ? { ...c, noLeidos: 0 } : c
      ),
    })),

  cargarConversaciones: () => {
    const mock: Conversacion[] = MENSAJES_CHAT.map((c, i) => {
      const esGrupo = c.tipo === 'grupal' || c.tipo === 'broadcast'
      return {
        id: c.id,
        participantes: c.participantes,
        tipo: c.tipo ?? 'individual',
        nombre: c.nombre,
        fotoGrupo: esGrupo ? '' : undefined,
        ultimoMensaje: c.ultimo,
        ultimoMensajeAutor: esGrupo ? USUARIOS[i % USUARIOS.length].nombre : c.nombre,
        ultimaActividad: Date.now() - i * 3600000 - Math.random() * 1800000,
        noLeidos: Math.floor(Math.random() * 5),
        fijado: i < 2,
        silenciadoHasta: undefined,
      }
    })
    set({ conversaciones: mock })
  },

  cargarMensajes: (conversacionId) => {
    set({ cargando: true })
    const conv = MENSAJES_CHAT.find((c) => c.id === conversacionId)
    const emisor = conv ? USUARIOS.find((u) => u.id === conv.participantes[0]) ?? USUARIOS[0] : USUARIOS[0]
    const receptor = conv ? USUARIOS.find((u) => u.id !== emisor.id) ?? USUARIOS[1] : USUARIOS[1]

    const frases = [
      '¡Hola! ¿Cómo va todo?',
      '¡Qué alegría encontrar esta app!',
      '¿Viste la foto que subió Claudia?',
      'Confirmo para el asado del sábado 🥩',
      'Te mando la receta que me pediste',
      '¡Me encantó el video! 😂',
      '¿Cómo están los chicos?',
      '¿Te acordás de cuando...?',
      '🎤 (mensaje de voz 0:32)',
      '¡Nos vemos en la cena! 🎉',
    ]

    const mock: Mensaje[] = frases.slice(0, 5).map((frase, i) => ({
      id: `msg-${i}-${conversacionId}`,
      conversacionId,
      emisorId: i % 2 === 0 ? emisor.id : receptor.id,
      emisorNombre: i % 2 === 0 ? emisor.nombre : receptor.nombre,
      emisorFoto: getFotoPerfil(i % 2 === 0 ? emisor.nombre : receptor.nombre),
      tipo: frase.includes('🎤') ? 'audio' : 'texto',
      contenido: frase,
      duracionAudio: frase.includes('🎤') ? 32 : undefined,
      leido: i < 3,
      fechaEnvio: Date.now() - (5 - i) * 600000,
    }))
    set((state) => ({
      mensajes: { ...state.mensajes, [conversacionId]: mock },
      cargando: false,
    }))
  },
}))
