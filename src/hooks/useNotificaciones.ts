import { useNotificacionStore } from '../store/notificacionStore'
import { useEffect } from 'react'

export function useNotificaciones() {
  const notificaciones = useNotificacionStore((s) => s.notificaciones)
  const noLeidas = useNotificacionStore((s) => s.noLeidas)
  const cargando = useNotificacionStore((s) => s.cargando)
  const cargarNotificaciones = useNotificacionStore((s) => s.cargarNotificaciones)
  const marcarLeida = useNotificacionStore((s) => s.marcarLeida)
  const marcarTodasLeidas = useNotificacionStore((s) => s.marcarTodasLeidas)

  useEffect(() => {
    if (notificaciones.length === 0) {
      cargarNotificaciones()
    }
  }, [])

  return {
    notificaciones,
    noLeidas,
    cargando,
    cargarNotificaciones,
    marcarLeida,
    marcarTodasLeidas,
  }
}
