import { useState, useRef, useEffect } from 'react'

interface VerificacionProps {
  email: string
  onCompletado: () => void
  onError: (msg: string) => void
}

export function VerificacionCodigo({ email, onCompletado, onError }: VerificacionProps) {
  const [codigo, setCodigo] = useState(['', '', '', '', '', ''])
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputs.current[0]?.focus()
  }, [])

  const handleChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return
    const nuevo = [...codigo]
    nuevo[i] = val
    setCodigo(nuevo)
    if (val && i < 5) inputs.current[i + 1]?.focus()
    if (nuevo.every((d) => d) && nuevo.join('').length === 6) {
      // Mock validation: accept any 6 digits
      if (nuevo.join('') === '123456') onCompletado()
      else onError('Código incorrecto')
    }
  }

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !codigo[i] && i > 0) {
      inputs.current[i - 1]?.focus()
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-texto-secundario)]">
        Hemos enviado un código de 6 dígitos a <strong>{email}</strong>
      </p>
      <div className="flex gap-2 justify-center">
        {codigo.map((d, i) => (
          <input
            key={i}
            ref={(el) => { inputs.current[i] = el }}
            type="text"
            maxLength={1}
            value={d}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
            aria-label={`Dígito ${i + 1}`}
            inputMode="numeric"
          />
        ))}
      </div>
      <p className="text-xs text-center text-[var(--color-texto-secundario)]">
        Código de prueba: 123456
      </p>
    </div>
  )
}
