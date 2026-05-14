import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', icon: '🏠', label: 'Inicio' },
  { to: '/fotos', icon: '📸', label: 'Fotos' },
  { to: '/videos', icon: '🎬', label: 'Videos' },
  { to: '/chats', icon: '💬', label: 'Chat' },
  { to: '/perfil', icon: '👤', label: 'Yo' },
]

export function BottomBar() {
  return (
    <nav className="bottom-bar fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-crema)] z-30 flex md:hidden safe-area-pb">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs transition-colors ${
              isActive
                ? 'text-[var(--color-institucional)] font-semibold'
                : 'text-[var(--color-texto-secundario)]'
            }`
          }
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
