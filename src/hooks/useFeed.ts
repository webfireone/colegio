import { useFeedStore } from '../store/feedStore'

export function useFeed() {
  const publicaciones = useFeedStore((s) => s.publicaciones)
  const filtroPlataforma = useFeedStore((s) => s.filtroPlataforma)
  const cargando = useFeedStore((s) => s.cargando)
  const setFiltro = useFeedStore((s) => s.setFiltro)
  const agregarPublicacion = useFeedStore((s) => s.agregarPublicacion)
  const agregarReaccion = useFeedStore((s) => s.agregarReaccion)
  const agregarComentario = useFeedStore((s) => s.agregarComentario)
  const cargarPublicaciones = useFeedStore((s) => s.cargarPublicaciones)

  const publicacionesFiltradas = filtroPlataforma
    ? publicaciones.filter((p) => p.plataforma === filtroPlataforma)
    : publicaciones

  return {
    publicaciones: publicacionesFiltradas,
    todas: publicaciones,
    filtroPlataforma,
    cargando,
    setFiltro,
    agregarPublicacion,
    agregarReaccion,
    agregarComentario,
    cargarPublicaciones,
  }
}
