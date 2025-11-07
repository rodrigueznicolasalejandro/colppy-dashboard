import React, { createContext, useContext, useState } from 'react'

// Crear el contexto
const FilterContext = createContext()

// Hook para usar el contexto
export function useFilter() {
  return useContext(FilterContext)
}

// Provider que envuelve toda la app
export function FilterProvider({ children }) {
  // Estado global del filtro (persistente mientras dure la sesión)
  const [days, setDays] = useState(30) // valor por defecto

  // Restablecer a default
  const resetFilter = () => setDays(30)

  return (
    <FilterContext.Provider value={{ days, setDays, resetFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
