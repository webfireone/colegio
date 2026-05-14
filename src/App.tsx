import { Component, ErrorInfo, ReactNode } from 'react'
import { AppRouter } from './routes/AppRouter'
import { BotonAyuda } from './components/ui/BotonAyuda'
import { useUIStore } from './store/uiStore'
import { useEffect } from 'react'

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error: Error) { return { error } }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('App crash:', error, info) }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
            <p className="text-5xl mb-4">😵</p>
            <h1 className="text-xl font-bold text-[var(--color-institucional)] mb-2">Algo salió mal</h1>
            <p className="text-sm text-[var(--color-texto-secundario)] mb-4">
              Ocurrió un error inesperado. Por favor recargá la página.
            </p>
            <p className="text-xs text-red-500 mb-4 font-mono bg-gray-100 p-2 rounded">{this.state.error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold hover:bg-[var(--color-institucional-light)]"
            >
              Recargar página
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  const { fontSize, highContrast } = useUIStore()

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize)
    document.documentElement.setAttribute('data-high-contrast', String(highContrast))
  }, [fontSize, highContrast])

  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <AppRouter />
      <BotonAyuda />
    </ErrorBoundary>
  )
}

export default App
