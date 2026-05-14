import { getFotoPerfil } from '../../utils/fotos'
import { useSearchParams } from 'react-router-dom'

export function ResultadosBusqueda() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''

  const resultados = [
    { categoria: 'Personas', items: [
      { nombre: 'Juan Pérez', subtitulo: 'Buenos Aires', foto: getFotoPerfil('Juan') },
      { nombre: 'Ana García', subtitulo: 'Córdoba', foto: getFotoPerfil('Ana') },
    ]},
    { categoria: 'Publicaciones', items: [
      { nombre: 'Viaje a Bariloche 1985', subtitulo: 'Juan Pérez · Hace 2h' },
      { nombre: 'Foto de egreso', subtitulo: 'Ana García · Hace 5h' },
    ]},
    { categoria: 'Grupos', items: [
      { nombre: 'Promoción 86', subtitulo: '15 miembros' },
      { nombre: 'Viajes y Aventuras', subtitulo: '8 miembros' },
    ]},
  ]

  return (
    <div className="space-y-6">
      <p className="text-sm text-[var(--color-texto-secundario)]">
        Resultados para: <strong className="text-[var(--color-texto)]">"{query}"</strong>
      </p>

      {resultados.map((cat) => (
        <div key={cat.categoria}>
          <h3 className="font-semibold text-sm text-[var(--color-institucional)] mb-3">{cat.categoria}</h3>
          <div className="space-y-2">
            {cat.items.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-3 shadow-[var(--shadow-card)] flex items-center gap-3 hover:shadow-[var(--shadow-elevated)] transition-shadow">
                {'foto' in item && item.foto ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={item.foto} alt="" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center text-white text-sm font-bold">
                    {item.nombre.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-medium text-sm">{item.nombre}</p>
                  <p className="text-xs text-[var(--color-texto-secundario)]">{item.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
