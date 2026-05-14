export type TipoReaccion = 'like' | 'encanta' | 'divierte' | 'asombra' | 'entristece' | 'enoja'

export const REACCIONES: Record<TipoReaccion, { emoji: string; label: string }> = {
  like: { emoji: '👍', label: 'Me gusta' },
  encanta: { emoji: '❤️', label: 'Me encanta' },
  divierte: { emoji: '😂', label: 'Me divierte' },
  asombra: { emoji: '😮', label: 'Me asombra' },
  entristece: { emoji: '😢', label: 'Me entristece' },
  enoja: { emoji: '😡', label: 'Me enoja' },
}
