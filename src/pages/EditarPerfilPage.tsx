import { useNavigate } from 'react-router-dom'
import { EditarPerfil } from '../components/perfil/EditarPerfil'

export function EditarPerfilPage() {
  const navigate = useNavigate()

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <EditarPerfil onCancel={() => navigate('/perfil')} onSuccess={() => navigate('/perfil')} />
      </div>
    </div>
  )
}
