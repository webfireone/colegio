import { GaleriaGrid } from '../components/galeria/GaleriaGrid'

export function FotosPage() {
  return (
    <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-celeste)] font-semibold">Fotos</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Galería de recuerdos</h1>
        </div>
      </div>
      <GaleriaGrid />
    </div>
  )
}
