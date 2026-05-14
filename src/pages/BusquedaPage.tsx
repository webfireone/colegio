import { useSearchParams } from 'react-router-dom'
import { BuscadorGlobal } from '../components/busqueda/BuscadorGlobal'
import { ResultadosBusqueda } from '../components/busqueda/ResultadosBusqueda'

export function BusquedaPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div className="space-y-4">
      <BuscadorGlobal />
      {query ? <ResultadosBusqueda /> : (
        <div className="text-center py-12 text-[var(--color-texto-secundario)]">
          <p className="text-4xl mb-3">🔍</p>
          <p>Busca compañeros, fotos, grupos o recuerdos</p>
        </div>
      )}
    </div>
  )
}
