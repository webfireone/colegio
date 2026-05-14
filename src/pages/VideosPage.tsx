import { useState } from 'react'
import { ReelsFeed } from '../components/video/ReelsFeed'
import { Videoteca } from '../components/video/Videoteca'

export function VideosPage() {
  const [vista, setVista] = useState<'cortos' | 'largos'>('cortos')

  return (
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
  )
}
