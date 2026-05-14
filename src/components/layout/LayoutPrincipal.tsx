import { Outlet, Navigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { HeaderColegio } from './HeaderColegio'
import { BottomBar } from './BottomBar'
import { Widgets } from './Widgets'

export function LayoutPrincipal() {
  const estaAutenticado = useAuthStore((s) => s.estaAutenticado)
  const debeCambiarClave = useAuthStore((s) => s.debeCambiarClave)

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />
  }

  if (debeCambiarClave) {
    return <Navigate to="/cambiar-clave" replace />
  }

  return (
    <div className="relative min-h-screen bg-[var(--color-crema)] hero-grid">
      <HeaderColegio />
      <BottomBar />

      <main id="main-content" className="flex-1 flex justify-center gap-6 px-4 py-6 pb-20 md:pb-6">
        <div className="w-full max-w-4xl">
          <Outlet />
        </div>
        <div className="hidden xl:block w-72 flex-shrink-0">
          <Widgets />
        </div>
      </main>
    </div>
  )
}
