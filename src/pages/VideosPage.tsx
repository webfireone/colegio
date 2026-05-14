import { useState } from 'react'
import { ReelsFeed } from '../components/video/ReelsFeed'
import { Videoteca } from '../components/video/Videoteca'

export function VideosPage() {
  const [vista, setVista] = useState<'cortos' | 'largos'>('cortos')

  return (
    <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-celeste)] font-semibold">Videos</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Solo videos</h1>
          <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">Aquí encontrarás los videos cortos y la videoteca de la promoción.</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex gap-3 p-1 glass-deep rounded-xl" role="tablist">
          <button
            role="tab"
            aria-selected={vista === 'cortos'}
            onClick={() => setVista('cortos')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              vista === 'cortos'
                ? 'gradient-institucional text-white shadow-glow'
                : 'text-white/50 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            🎬 Cortos
          </button>
          <button
            role="tab"
            aria-selected={vista === 'largos'}
            onClick={() => setVista('largos')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              vista === 'largos'
                ? 'gradient-institucional text-white shadow-glow'
                : 'text-white/50 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            📺 Videoteca
          </button>
        </div>

        <div className="animate-fade-in" key={vista}>
          {vista === 'cortos' ? <ReelsFeed /> : <Videoteca />}
        </div>
      </div>
    </div>
  )
}
