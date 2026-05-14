import { useState, useEffect } from 'react'
import { ListaChats } from '../components/chat/ListaChats'
import { Conversacion } from '../components/chat/Conversacion'
import { Llamadas } from '../components/chat/Llamadas'
import { useChat } from '../hooks/useChat'

export function ChatsPage() {
  const { cargarConversaciones } = useChat()
  const [pestana, setPestana] = useState<'chats' | 'llamadas'>('chats')

  useEffect(() => {
    cargarConversaciones()
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setPestana('chats')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
            pestana === 'chats' ? 'bg-[var(--color-whatsapp)] text-white shadow-glow' : 'text-white/50 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          💬 Chats
        </button>
        <button
          onClick={() => setPestana('llamadas')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
            pestana === 'llamadas' ? 'bg-[var(--color-celeste)] text-white shadow-glow' : 'text-white/50 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          📞 Llamadas
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pestana === 'chats' ? (
          <>
            <ListaChats />
            <Conversacion />
          </>
        ) : (
          <div className="md:col-span-2">
            <Llamadas />
          </div>
        )}
      </div>
    </div>
  )
}
