import { useAuthStore } from '../store/authStore'

export function useAuth() {
  const usuario = useAuthStore((s) => s.usuario)
  const estaAutenticado = useAuthStore((s) => s.estaAutenticado)
  const cargando = useAuthStore((s) => s.cargando)
  const error = useAuthStore((s) => s.error)
  const login = useAuthStore((s) => s.login)
  const registro = useAuthStore((s) => s.registro)
  const logout = useAuthStore((s) => s.logout)
  const actualizarPerfil = useAuthStore((s) => s.actualizarPerfil)
  const limpiarError = useAuthStore((s) => s.limpiarError)

  return {
    usuario, estaAutenticado, cargando, error,
    login, registro, logout, actualizarPerfil, limpiarError,
  }
}
