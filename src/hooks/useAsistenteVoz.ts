import { useCallback } from 'react'

export function useAsistenteVoz() {
  const reconocer = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (!SpeechRecognition) {
        reject(new Error('Reconocimiento de voz no soportado'))
        return
      }
      const recognition = new SpeechRecognition()
      recognition.lang = 'es-AR'
      recognition.interimResults = false
      recognition.maxAlternatives = 1

      recognition.onresult = (event: any) => {
        resolve(event.results[0][0].transcript)
      }
      recognition.onerror = (event: any) => {
        reject(new Error(`Error de reconocimiento: ${event.error}`))
      }
      recognition.start()
    })
  }, [])

  const hablar = useCallback((texto: string) => {
    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.lang = 'es-AR'
    utterance.rate = 0.9
    utterance.pitch = 1
    speechSynthesis.speak(utterance)
  }, [])

  return { reconocer, hablar }
}
