import { useState } from 'react'
import { useChat } from '../../hooks/useChat'
import { formatearFecha, duracionAudio } from '../../utils/formatos'

export function Conversacion() {
  const { mensajes, conversacionActiva, enviarMensaje, cargarMensajes } = useChat()

  return (
    <div className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden flex flex-col h-full">
      {!conversacionActiva ? (
        <div className="flex-1 flex items-center justify-center text-sm text-[var(--color-texto-secundario)] p-8">
          Selecciona una conversación para empezar
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[60vh]">
            {mensajes.length === 0 ? (
              <p className="text-center text-sm text-[var(--color-texto-secundario)]">No hay mensajes aún</p>
            ) : (
              mensajes.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.emisorId === 'user-1' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                      msg.emisorId === 'user-1'
                        ? 'bg-[var(--color-whatsapp)] text-white rounded-br-sm'
                        : 'bg-[var(--color-crema)] text-[var(--color-texto)] rounded-bl-sm'
                    }`}
                  >
                    {msg.tipo === 'audio' ? (
                      <div className="flex items-center gap-2 min-w-[150px]">
                        <span>🎤</span>
                        <div className="flex-1 h-8 bg-white/20 rounded-full relative overflow-hidden">
                          <div className="h-full bg-white/30 rounded-full" style={{ width: '40%' }} />
                        </div>
                        <span className="text-xs">{duracionAudio(msg.duracionAudio ?? 0)}</span>
                      </div>
                    ) : msg.tipo === 'imagen' ? (
                      <div>
                        <p className="mb-1">{msg.contenido}</p>
                        {msg.archivoUrl && (
                          <img src={msg.archivoUrl} alt="" className="rounded-lg max-w-[250px]" />
                        )}
                      </div>
                    ) : (
                      <p>{msg.contenido}</p>
                    )}
                    <div className={`text-[10px] mt-1 ${msg.emisorId === 'user-1' ? 'text-white/70' : 'text-[var(--color-texto-secundario)]'} text-right`}>
                      {formatearFecha(msg.fechaEnvio)}
                      {msg.leido && msg.emisorId === 'user-1' && ' ✓✓'}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <ChatInput onSend={(texto) => enviarMensaje(conversacionActiva, texto)} />
        </>
      )}
    </div>
  )
}

function ChatInput({ onSend }: { onSend: (texto: string) => void }) {
  const [texto, setTexto] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (texto.trim()) {
      onSend(texto.trim())
      setTexto('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-[var(--color-crema)]">
      <button type="button" className="touch-target text-xl text-[var(--color-texto-secundario)]" aria-label="Adjuntar">
        📎
      </button>
      <button type="button" className="touch-target text-xl text-[var(--color-texto-secundario)]" aria-label="Nota de voz">
        🎤
      </button>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="flex-1 px-4 py-2.5 rounded-full bg-[var(--color-crema)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-celeste)]"
        aria-label="Mensaje"
      />
      <button
        type="submit"
        disabled={!texto.trim()}
        className="touch-target text-xl text-[var(--color-whatsapp)] disabled:opacity-40"
        aria-label="Enviar"
      >
        📤
      </button>
    </form>
  )
}

