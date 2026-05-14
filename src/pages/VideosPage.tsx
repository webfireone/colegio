import { useState } from 'react'
import { ReelsFeed } from '../components/video/ReelsFeed'
import { Videoteca } from '../components/video/Videoteca'

export function VideosPage() {
  const [vista, setVista] = useState<'cortos' | 'largos'>('cortos')

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setVista('cortos')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
            vista === 'cortos' ? 'bg-[var(--color-tiktok)] text-white' : 'bg-white text-[var(--color-texto)]'
          }`}
        >
          🎬 Videos Cortos
        </button>
        <button
          onClick={() => setVista('largos')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
            vista === 'largos' ? 'bg-[var(--color-youtube)] text-white' : 'bg-white text-[var(--color-texto)]'
          }`}
        >
          📺 Videoteca
        </button>
      </div>
      {vista === 'cortos' ? <ReelsFeed /> : <Videoteca />}
    </div>
  )
}
