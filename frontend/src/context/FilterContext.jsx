import React, { createContext, useContext, useState } from 'react'

const FilterContext = createContext()

export function useFilter() {
  return useContext(FilterContext)
}

export function FilterProvider({ children }) {
  const [days, setDays] = useState(30) // valor por defecto
  const resetFilter = () => setDays(30)

  return (
    <FilterContext.Provider value={{ days, setDays, resetFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
