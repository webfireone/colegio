import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  fontSize: 'normal' | 'large'
  highContrast: boolean
  darkMode: boolean
  modoAyuda: boolean
  sidebarAbierta: boolean
  toggleFontSize: () => void
  toggleHighContrast: () => void
  toggleDarkMode: () => void
  toggleModoAyuda: () => void
  toggleSidebar: () => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      fontSize: 'normal',
      highContrast: false,
      darkMode: false,
      modoAyuda: false,
      sidebarAbierta: true,

      toggleFontSize: () =>
        set((state) => ({
          fontSize: state.fontSize === 'normal' ? 'large' : 'normal',
        })),

      toggleHighContrast: () =>
        set((state) => ({ highContrast: !state.highContrast })),

      toggleDarkMode: () =>
        set((state) => ({ darkMode: !state.darkMode })),

      toggleModoAyuda: () =>
        set((state) => ({ modoAyuda: !state.modoAyuda })),

      toggleSidebar: () =>
        set((state) => ({ sidebarAbierta: !state.sidebarAbierta })),
    }),
    { name: 'ui-storage' }
  )
)
