import { useNavigate } from 'react-router-dom'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <p className="text-6xl mb-4">🔍</p>
      <h1 className="text-2xl font-bold text-[var(--color-institucional)] mb-2">Página no encontrada</h1>
      <p className="text-[var(--color-texto-secundario)] mb-6">La página que buscas no existe o fue eliminada.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold hover:bg-[var(--color-institucional-light)] transition-colors"
      >
        Volver al inicio
      </button>
    </div>
  )
}
