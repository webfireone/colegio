import { useChatStore } from '../store/chatStore'
import { Mensaje } from '../types'

export function useChat() {
  const conversaciones = useChatStore((s) => s.conversaciones)
  const mensajes = useChatStore((s) => s.mensajes)
  const conversacionActiva = useChatStore((s) => s.conversacionActiva)
  const cargando = useChatStore((s) => s.cargando)
  const seleccionarConversacion = useChatStore((s) => s.seleccionarConversacion)
  const enviarMensajeStore = useChatStore((s) => s.enviarMensaje)
  const marcarLeido = useChatStore((s) => s.marcarLeido)
  const cargarConversaciones = useChatStore((s) => s.cargarConversaciones)
  const cargarMensajes = useChatStore((s) => s.cargarMensajes)

  const enviarMensaje = (conversacionId: string, contenido: string, tipo: Mensaje['tipo'] = 'texto', archivoUrl?: string) => {
    const mensaje: Mensaje = {
      id: `msg-${Date.now()}`,
      conversacionId,
      emisorId: 'user-1',
      emisorNombre: 'María López',
      emisorFoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      tipo,
      contenido,
      archivoUrl,
      leido: false,
      fechaEnvio: Date.now(),
    }
    enviarMensajeStore(conversacionId, mensaje)
  }

  const mensajesActivos = conversacionActiva ? mensajes[conversacionActiva] || [] : []

  return {
    conversaciones,
    mensajes: mensajesActivos,
    conversacionActiva,
    cargando,
    seleccionarConversacion,
    enviarMensaje,
    marcarLeido,
    cargarConversaciones,
    cargarMensajes,
  }
}
