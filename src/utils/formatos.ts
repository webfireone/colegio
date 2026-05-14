export function formatearFecha(timestamp: number): string {
  const ahora = Date.now()
  const diff = ahora - timestamp
  const minutos = Math.floor(diff / 60000)
  const horas = Math.floor(diff / 3600000)
  const dias = Math.floor(diff / 86400000)

  if (minutos < 1) return 'Ahora'
  if (minutos < 60) return `Hace ${minutos} min`
  if (horas < 24) return `Hace ${horas}h`
  if (dias < 7) return `Hace ${dias} días`

  const fecha = new Date(timestamp)
  return fecha.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function formatearFechaEvento(timestamp: number): string {
  const fecha = new Date(timestamp)
  return fecha.toLocaleDateString('es-AR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

export function formatearCumpleanos(fechaNacimiento: string): string {
  const fecha = new Date(fechaNacimiento)
  return fecha.toLocaleDateString('es-AR', { day: 'numeric', month: 'long' })
}

export function obtenerEdad(fechaNacimiento: string): number {
  const hoy = new Date()
  const nacimiento = new Date(fechaNacimiento)
  let edad = hoy.getFullYear() - nacimiento.getFullYear()
  const mes = hoy.getMonth() - nacimiento.getMonth()
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) edad--
  return edad
}

export function esHoy(timestamp: number): boolean {
  const fecha = new Date(timestamp)
  const hoy = new Date()
  return (
    fecha.getDate() === hoy.getDate() &&
    fecha.getMonth() === hoy.getMonth() &&
    fecha.getFullYear() === hoy.getFullYear()
  )
}

export function duracionAudio(segundos: number): string {
  const mins = Math.floor(segundos / 60)
  const segs = Math.floor(segundos % 60)
  return `${mins}:${segs.toString().padStart(2, '0')}`
}

export function iniciales(nombre: string): string {
  return nombre
    .split(' ')
    .map((p) => p[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
