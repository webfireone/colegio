import { AppRouter } from './routes/AppRouter'
import { BotonAyuda } from './components/ui/BotonAyuda'
import { useUIStore } from './store/uiStore'
import { useEffect } from 'react'

function App() {
  const { fontSize, highContrast } = useUIStore()

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize)
    document.documentElement.setAttribute('data-high-contrast', String(highContrast))
  }, [fontSize, highContrast])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <AppRouter />
      <BotonAyuda />
    </>
  )
}

export default App
