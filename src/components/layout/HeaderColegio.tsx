import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { useNotificacionStore } from '../../store/notificacionStore'

const navItems = [
  { to: '/', icon: '🏠', label: 'Inicio' },
  { to: '/fotos', icon: '📸', label: 'Fotos' },
  { to: '/videos', icon: '🎬', label: 'Videos' },
  { to: '/chats', icon: '💬', label: 'Chat' },
  { to: '/perfil', icon: '👤', label: 'Perfil' },
]

export function HeaderColegio() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [query, setQuery] = useState('')
  const usuario = useAuthStore((s) => s.usuario)
  const cerrarSesion = useAuthStore((s) => s.logout)
  const noLeidas = useNotificacionStore((s) => s.noLeidas)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) navigate(`/busqueda?q=${encodeURIComponent(query)}`)
  }

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{ boxShadow: scrolled ? '0 8px 32px rgba(26,42,94,0.08)' : 'none' }}
    >
      <div
        className={`relative transition-all duration-500 ${scrolled ? 'backdrop-blur-xl' : ''} glass-edge`}
      >
        {/* Gradient border line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500 z-10"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(74,144,226,0.7), rgba(212,175,55,0.4), transparent)',
            opacity: scrolled ? 0.8 : 0.4,
          }}
        />

        {/* Desktop layout */}
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          {/* Logo + Brand */}
          <div
            className="flex items-center gap-2 cursor-pointer shrink-0"
            onClick={() => navigate('/')}
          >
            <img
              src="/logo.jpg"
              alt="Inmaculada logo"
              className="w-10 h-10 rounded-lg object-cover shadow-sm border border-white/10"
            />
            <div className="hidden sm:block">
              <p className="text-xs font-heading font-bold gradient-text-institucional leading-tight">
                Inmaculada
              </p>
              <p className="text-[9px] text-[var(--color-texto-secundario)] leading-tight">Conectados por siempre</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'gradient-institucional text-white shadow-sm'
                      : 'text-[var(--color-texto-secundario)] hover:text-white hover:bg-[var(--color-surface-hover)]'
                  }`
                }
              >
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side: search + actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden sm:block">
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-[var(--color-texto-secundario)]">🔍</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="w-36 lg:w-48 pl-7 pr-3 py-1.5 rounded-full bg-[var(--color-surface)] text-xs text-white border-none focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)] placeholder:text-[var(--color-texto-secundario)]"
                  aria-label="Buscar"
                />
              </div>
            </form>

            {/* Notifications */}
            <button
              onClick={() => navigate('/notificaciones')}
              className="relative p-1.5 text-sm text-[var(--color-texto-secundario)] hover:text-white transition-colors"
              aria-label="Notificaciones"
            >
              🔔
              {noLeidas > 0 && (
                <span className="absolute top-0 right-0 bg-[var(--color-error)] text-white text-[8px] rounded-full min-w-[14px] h-[14px] flex items-center justify-center font-bold">
                  {noLeidas > 9 ? '9+' : noLeidas}
                </span>
              )}
            </button>

            {/* Profile */}
            {usuario && (
              <button
                onClick={() => navigate('/perfil')}
                className="ml-1 w-7 h-7 rounded-full overflow-hidden border-2 border-[var(--color-celeste)]"
                aria-label="Mi perfil"
              >
                {usuario.fotoPerfil ? (
                  <img src={usuario.fotoPerfil} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="flex items-center justify-center w-full h-full bg-[var(--color-institucional)] text-white text-[10px] font-bold">
                    {usuario.nombreCompleto?.charAt(0) || '?'}
                  </span>
                )}
              </button>
            )}

            {/* Logout */}
            <button
              onClick={cerrarSesion}
              className="ml-2 px-3 py-1 rounded-full bg-[var(--color-institucional)] text-[var(--color-blanco)] text-[11px] font-semibold hover:bg-[var(--color-celeste)] transition-colors"
              aria-label="Cerrar sesión"
            >
              Salir
            </button>
          </div>
        </div>

        {/* Mobile nav + search */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto px-3 pb-1 gap-0.5 no-scrollbar">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-2.5 py-1 text-[10px] font-medium rounded-lg whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'gradient-institucional text-white'
                      : 'text-[var(--color-texto-secundario)] hover:text-white'
                  }`
                }
              >
                <span className="text-xs">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="px-3 pb-2">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-[var(--color-texto-secundario)]">🔍</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar compañeros, fotos, recuerdos..."
                  className="w-full pl-7 pr-3 py-1.5 rounded-full bg-[var(--color-surface)] text-xs text-white border-none focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
                  aria-label="Buscar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
