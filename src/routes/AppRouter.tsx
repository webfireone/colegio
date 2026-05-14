import { Routes, Route } from 'react-router-dom'
import { LayoutPrincipal } from '../components/layout/LayoutPrincipal'
import { HomePage } from '../pages/HomePage'
import { FotosPage } from '../pages/FotosPage'
import { VideosPage } from '../pages/VideosPage'
import { ChatsPage } from '../pages/ChatsPage'
import { PerfilPage } from '../pages/PerfilPage'
import { PerfilAmigoPage } from '../pages/PerfilAmigoPage'
import { LoginPage } from '../pages/LoginPage'
import { LoginFormPage } from '../pages/LoginFormPage'
import { RegistroPage } from '../pages/RegistroPage'
import { CambiarClavePage } from '../pages/CambiarClavePage'
import { BusquedaPage } from '../pages/BusquedaPage'
import { NotificacionesPage } from '../pages/NotificacionesPage'
import { ConfiguracionPage } from '../pages/ConfiguracionPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/form" element={<LoginFormPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/cambiar-clave" element={<CambiarClavePage />} />

      <Route element={<LayoutPrincipal />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/fotos" element={<FotosPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/perfil/:id" element={<PerfilAmigoPage />} />
        <Route path="/busqueda" element={<BusquedaPage />} />
        <Route path="/notificaciones" element={<NotificacionesPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
