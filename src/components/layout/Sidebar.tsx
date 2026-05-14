import { NavLink } from 'react-router-dom'
import { useUIStore } from '../../store/uiStore'
import { PLATAFORMA_INFO } from '../../utils/constantes'

const navItems = [
  { to: '/', icon: '🏠', label: 'Inicio' },
  { to: '/fotos', icon: '📸', label: 'Fotos' },
  { to: '/videos', icon: '🎬', label: 'Videos' },
  { to: '/chats', icon: '💬', label: 'Chats' },
  { to: '/perfil', icon: '👤', label: 'Perfil' },
]

export function Sidebar() {
  const sidebarAbierta = useUIStore((s) => s.sidebarAbierta)

  return (
    <aside
      className={`sidebar fixed left-0 top-0 h-full bg-gradient-to-b from-[var(--color-institucional)] to-[var(--color-institucional-light)] text-white z-30 flex flex-col transition-all duration-300 ${
        sidebarAbierta ? 'w-64' : 'w-16'
      }`}
    >
      <div className="relative flex items-center gap-3 p-4 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dorado)]/5 to-transparent" />
        <span className="text-2xl relative z-10">🏫</span>
        {sidebarAbierta && (
          <div className="relative z-10">
            <p className="font-[var(--font-heading)] text-sm leading-tight text-[var(--color-dorado)]">
              Inmaculada Concepción
            </p>
            <p className="text-[10px] opacity-70">Conectados por siempre</p>
          </div>
        )}
      </div>

      <nav className="flex-1 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 mx-2 rounded-lg text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-white/15 text-[var(--color-dorado)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white hover-lift'
              }`
            }
          >
            <span className="text-xl min-w-[28px] text-center">{item.icon}</span>
            {sidebarAbierta && <span className="font-medium">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        {sidebarAbierta && (
          <div className="space-y-1 mb-3">
            <p className="text-[10px] uppercase tracking-wider opacity-50">Plataformas</p>
            {Object.entries(PLATAFORMA_INFO).map(([key, info]) => (
              <div key={key} className="flex items-center gap-2 text-xs opacity-60 hover:opacity-90 transition-opacity">
                <span className="text-base">{info.icono}</span>
                {info.nombre}
              </div>
            ))}
          </div>
        )}
        <p className="text-[10px] opacity-30">© 2026 · Promo 86</p>
      </div>
    </aside>
  )
}
