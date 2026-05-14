import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export function BuscadorGlobal() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  useEffect(() => {
    if (query) setSearchParams({ q: query })
  }, [query])

  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca compañeros, fotos, grupos, eventos..."
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-base shadow-[var(--shadow-card)] focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
        aria-label="Búsqueda global"
        autoFocus
      />
    </div>
  )
}
