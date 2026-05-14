const FOTOS_REALES: Record<string, string> = {
  claudia: '/fotos/Claudia.jpg',
  edy: '/fotos/Edy.jpg',
  fabiana: '/fotos/Fabiana.jpg',
  jorge: '/fotos/Jorge.jpg',
  mara: '/fotos/Mara.jpg',
  mariana: '/fotos/Mariana.jpg',
  paula: '/fotos/PAULA.jpg',
  pocha: '/fotos/POCHA.jpg',
  cristian: '/fotos/Cristian.jpg',
  marcelo: '/fotos/Marcelo.jpg',
  marito: '/fotos/MARITO.jpg',
}

export function getFotoPerfil(nombre: string): string {
  const key = nombre.toLowerCase().trim().split(' ')[0]
  if (FOTOS_REALES[key]) return FOTOS_REALES[key]
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${nombre}`
}
