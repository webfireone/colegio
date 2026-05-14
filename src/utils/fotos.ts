const FOTOS_REALES: Record<string, string> = {
  claudia: '/fotos/Claudia.jpg',
  edy: '/fotos/Edy.jpg',
  fabiana: '/fotos/Fabiana.jpg',
  jorge: '/fotos/Jorge.jpg',
  laura: '/fotos/laura.png',
  mara: '/fotos/Mara.jpg',
  mariana: '/fotos/Mariana.jpg',
  paula: '/fotos/PAULA.jpg',
  pocha: '/fotos/POCHA.jpg',
  cristian: '/fotos/Cristian.jpg',
  marcelo: '/fotos/Marcelo.jpg',
  marito: '/fotos/MARITO.jpg',
}

const FOTOS_GRUPO = [
  '/fotos/todos.jpg',
  '/fotos/TODOS FULL.png',
  '/fotos/TODOS PLAYA.png',
  '/fotos/todos1.jpg',
  '/fotos/todos3.jpg',
  '/fotos/todos.png',
  '/fotos/811.jpg',
  '/fotos/c1.jpg',
  '/fotos/las 2.jpg',
  '/fotos/las 3.jpg',
  '/fotos/las 4.jpg',
  '/fotos/las 6.jpg',
  '/fotos/LAS 7.png',
  '/fotos/LAS 8.jpg',
  '/fotos/la 4.png',
  '/fotos/marca.jpg',
  '/fotos/tipo.jpg',
  '/fotos/MIERCOLES 00.jpg',
  '/fotos/YO Y MICK.jpg',
  '/fotos/6c828ceefb6842e59af1c551c629b7fd.jpg',
]

const VIDEOS_REALES: Record<string, string> = {
  cristian: '/fotos/cris_generated.mp4',
}

export function getFotoPerfil(nombre: string): string {
  const key = nombre.toLowerCase().trim().split(' ')[0]
  if (FOTOS_REALES[key]) return FOTOS_REALES[key]
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${nombre}`
}

export function getFotoGrupo(): string {
  return FOTOS_GRUPO[Math.floor(Math.random() * FOTOS_GRUPO.length)]
}

export function getVideoPerfil(nombre: string): string | null {
  const key = nombre.toLowerCase().trim().split(' ')[0]
  return VIDEOS_REALES[key] || null
}
