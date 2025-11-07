import { useEffect, useRef } from 'react'

export default function usePolling(callback, intervalMs) {
  const cbRef = useRef(callback) // useRef guarda una referencia al callback actual, sin causar re-render
  useEffect(() => { cbRef.current = callback }, [callback])

  useEffect(() => { // Si el callback cambia, actualizamos la referencia
    let mounted = true
    let idInterval = null

    async function executeCallback() {
      if (!mounted) return
      try {
        await cbRef.current() // Ejecuta el callback
      } catch(e) { 
        // TODO: Agregar manejo de errores
      }
    }

    executeCallback()
    idInterval = setInterval(executeCallback, intervalMs)
    return () => { mounted = false; clearInterval(idInterval) }
  }, [intervalMs])
}
