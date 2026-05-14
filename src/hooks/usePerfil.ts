import { usePerfilStore } from '../store/perfilStore'

export function usePerfil() {
  const perfilActual = usePerfilStore((s) => s.perfilActual)
  const perfilesVistos = usePerfilStore((s) => s.perfilesVistos)
  const cargando = usePerfilStore((s) => s.cargando)
  const cargarPerfil = usePerfilStore((s) => s.cargarPerfil)
  const actualizarPerfilStore = usePerfilStore((s) => s.actualizarPerfil)
  const limpiarPerfil = usePerfilStore((s) => s.limpiarPerfil)

  return {
    perfilActual,
    perfilesVistos,
    cargando,
    cargarPerfil,
    actualizarPerfil: actualizarPerfilStore,
    limpiarPerfil,
  }
}
