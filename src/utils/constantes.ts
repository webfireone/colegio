export const PLATAFORMA_INFO = {
  facebook: {
    nombre: 'Facebook',
    color: '#1877F2',
    icono: '📘',
    descripcion: 'Publicaciones, eventos y grupos',
  },
  instagram: {
    nombre: 'Instagram',
    color: '#E4405F',
    icono: '📸',
    descripcion: 'Fotos, historias y galerías',
  },
  tiktok: {
    nombre: 'TikTok',
    color: '#000000',
    icono: '🎬',
    descripcion: 'Videos cortos y tendencias',
  },
  youtube: {
    nombre: 'YouTube',
    color: '#FF0000',
    icono: '📺',
    descripcion: 'Videos largos y transmisiones',
  },
  whatsapp: {
    nombre: 'WhatsApp',
    color: '#25D366',
    icono: '💬',
    descripcion: 'Chat y llamadas',
  },
} as const

export const PLATAFORMAS = ['facebook', 'instagram', 'tiktok', 'youtube', 'whatsapp'] as const

export const PREGUNTAS_SEGURIDAD = [
  '¿Nombre del director/a del colegio en 1986?',
  '¿Materia favorita del último año?',
  '¿Nombre del profesor/a de matemáticas?',
  '¿Curso al que pertenecías?',
  '¿Apellido del/la secretario/a académico/a?',
]

export const DIAS_SEMANA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
export const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export const FILTROS_EPOCA = [
  { id: 'ninguno', nombre: 'Original' },
  { id: 'vintage', nombre: 'Vintage' },
  { id: 'sepia', nombre: 'Sepia' },
  { id: 'byn', nombre: 'Blanco y Negro' },
  { id: 'retro80', nombre: 'Retro 80s' },
]
