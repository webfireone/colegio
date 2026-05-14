import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUIStore } from '../../store/uiStore'
import { useAuthStore } from '../../store/authStore'
import { useNotificacionStore } from '../../store/notificacionStore'

export function Cabecera() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const { toggleSidebar, toggleFontSize, toggleHighContrast } = useUIStore()
  const usuario = useAuthStore((s) => s.usuario)
  const noLeidas = useNotificacionStore((s) => s.noLeidas)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) navigate(`/busqueda?q=${encodeURIComponent(query)}`)
  }

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-[var(--color-crema)]">
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={toggleSidebar}
          className="touch-target hidden md:flex text-xl text-[var(--color-texto-secundario)] hover:text-[var(--color-institucional)]"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[var(--color-texto-secundario)]">🔍</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar compañeros, fotos, recuerdos..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[var(--color-crema)] text-[var(--color-texto)] text-sm border-none focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
              aria-label="Buscar"
            />
          </div>
        </form>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/notificaciones')}
            className="touch-target relative text-xl text-[var(--color-texto-secundario)] hover:text-[var(--color-institucional)]"
            aria-label="Notificaciones"
          >
            🔔
            {noLeidas > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[var(--color-error)] text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-bold">
                {noLeidas > 9 ? '9+' : noLeidas}
              </span>
            )}
          </button>

          <button
            onClick={toggleFontSize}
            className="touch-target text-sm text-[var(--color-texto-secundario)] hover:text-[var(--color-institucional)] font-bold"
            aria-label="Cambiar tamaño de letra"
            title="Modo letra grande"
          >
            A<span className="text-xs">A</span>
          </button>

          <button
            onClick={toggleHighContrast}
            className="touch-target text-sm text-[var(--color-texto-secundario)] hover:text-[var(--color-institucional)]"
            aria-label="Alto contraste"
            title="Alto contraste"
          >
            ◐
          </button>

          {usuario && (
            <button
              onClick={() => navigate('/perfil')}
              className="touch-target w-8 h-8 rounded-full overflow-hidden border-2 border-[var(--color-celeste)]"
              aria-label="Mi perfil"
            >
              {usuario.fotoPerfil ? (
                <img src={usuario.fotoPerfil} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="flex items-center justify-center w-full h-full bg-[var(--color-institucional)] text-white text-xs font-bold">
                  {usuario.nombreCompleto.charAt(0)}
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
