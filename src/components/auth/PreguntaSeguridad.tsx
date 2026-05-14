import { useState } from 'react'
import { PREGUNTAS_SEGURIDAD } from '../../utils/constantes'

interface PreguntaSeguridadProps {
  onCompletado: () => void
  onError: (msg: string) => void
}

export function PreguntaSeguridad({ onCompletado, onError }: PreguntaSeguridadProps) {
  const [pregunta] = useState(() => PREGUNTAS_SEGURIDAD[Math.floor(Math.random() * PREGUNTAS_SEGURIDAD.length)])
  const [respuesta, setRespuesta] = useState('')
  const [intentos, setIntentos] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (respuesta.trim().toLowerCase() === '1986' || respuesta.trim().toLowerCase() === 'inmaculada') {
      onCompletado()
    } else {
      const nuevos = intentos + 1
      setIntentos(nuevos)
      if (nuevos >= 3) {
        onError('Demasiados intentos. Contacta a la comisión de exalumnos para verificar tu identidad.')
      } else {
        onError(`Respuesta incorrecta. Te quedan ${3 - nuevos} intentos.`)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-[var(--color-crema)] rounded-lg p-4">
        <p className="text-sm font-medium mb-1">Verificación de seguridad</p>
        <p className="text-base">{pregunta}</p>
      </div>
      <div>
        <input
          type="text"
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
          placeholder="Tu respuesta..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
          required
        />
      </div>
      <button
        type="submit"
        disabled={intentos >= 3}
        className="w-full py-3 rounded-lg bg-[var(--color-institucional)] text-white font-semibold hover:bg-[var(--color-institucional-light)] disabled:opacity-50 transition-colors"
      >
        Verificar
      </button>
    </form>
  )
}
