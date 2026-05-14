import { useUIStore } from '../store/uiStore'

export function useModoAyuda() {
  const modoAyuda = useUIStore((s) => s.modoAyuda)
  const toggleModoAyuda = useUIStore((s) => s.toggleModoAyuda)

  return { modoAyuda, toggleModoAyuda }
}
