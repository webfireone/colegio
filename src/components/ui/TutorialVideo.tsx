interface TutorialProps {
  titulo: string
  descripcion: string
  videoUrl?: string
  pasos: string[]
  onCerrar: () => void
}

export function TutorialVideo({ titulo, descripcion, pasos, onCerrar }: TutorialProps) {
  return (
    <div className="space-y-4">
      <div className="bg-[var(--color-surface)] rounded-lg p-4">
        <p className="text-sm text-[var(--color-texto-secundario)] mb-2">{descripcion}</p>
        <div className="aspect-video bg-[var(--color-institucional)]/10 rounded-lg flex items-center justify-center">
          <span className="text-4xl">🎬</span>
        </div>
      </div>

      <ol className="space-y-2">
        {pasos.map((paso, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-celeste)] text-white flex items-center justify-center text-xs font-bold">
              {i + 1}
            </span>
            <span className="pt-1">{paso}</span>
          </li>
        ))}
      </ol>

      <button
        onClick={onCerrar}
        className="w-full py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold text-sm hover:bg-[var(--color-institucional-light)] transition-colors"
      >
        Entendido
      </button>
    </div>
  )
}
