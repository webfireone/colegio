import { useState } from 'react'
import { USUARIOS } from '../../utils/contenidoReal'

export function Llamadas() {
  const [enLlamada, setEnLlamada] = useState(false)

  const contactos = USUARIOS.slice(0, 8).map((u, i) => ({
    id: u.id,
    nombre: u.nombre,
    tipo: (i % 2 === 0 ? 'voz' : 'video') as 'voz' | 'video',
    disponible: i % 3 !== 2,
  }))

  return (
    <div className="bg-[var(--color-surface)] rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
      {enLlamada ? (
        <div className="p-8 text-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] mx-auto flex items-center justify-center">
            <span className="text-4xl">📞</span>
          </div>
          <p className="font-semibold">En llamada...</p>
          <p className="text-sm text-[var(--color-texto-secundario)]">00:32</p>
          <button
            onClick={() => setEnLlamada(false)}
            className="px-8 py-3 rounded-full bg-[var(--color-error)] text-white font-semibold hover:bg-red-700 transition-colors"
          >
            Colgar
          </button>
        </div>
      ) : (
        <div className="divide-y divide-[var(--color-border)]">
          <div className="flex gap-2 p-3 border-b border-[var(--color-border)]">
            <button
              onClick={() => setEnLlamada(true)}
              className="flex-1 py-2 rounded-lg bg-[var(--color-exito)] text-white text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              📞 Nueva llamada de voz
            </button>
            <button
              onClick={() => setEnLlamada(true)}
              className="flex-1 py-2 rounded-lg bg-[var(--color-celeste)] text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              📹 Nueva videollamada
            </button>
          </div>
          {contactos.map((c) => (
            <div key={c.id} className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-institucional)] to-[var(--color-celeste)] flex items-center justify-center text-white text-sm font-bold">
                {c.nombre.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{c.nombre}</p>
                <p className={`text-xs ${c.disponible ? 'text-[var(--color-exito)]' : 'text-[var(--color-texto-secundario)]'}`}>
                  {c.disponible ? '🟢 Disponible' : '⚪ Desconectado'}
                </p>
              </div>
              <button
                disabled={!c.disponible}
                className="touch-target text-xl disabled:opacity-30"
                aria-label={`Llamar a ${c.nombre}`}
                title={c.tipo === 'voz' ? 'Llamada de voz' : 'Videollamada'}
              >
                {c.tipo === 'voz' ? '📞' : '📹'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
