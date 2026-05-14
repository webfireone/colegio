export function validarEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validarPassword(password: string): string | null {
  if (password.length < 6) return 'La contraseña debe tener al menos 6 caracteres'
  return null
}

export function validarNombre(nombre: string): string | null {
  if (nombre.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres'
  return null
}

export function validarAnioEgreso(anio: number): string | null {
  if (anio !== 1986) return 'Solo exalumnos de la promoción 1986'
  return null
}

export function sanitizarTexto(texto: string): string {
  return texto.trim().replace(/<[^>]*>/g, '')
}
