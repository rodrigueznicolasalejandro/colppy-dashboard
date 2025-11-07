import React from 'react'
import { useFilter } from '../context/FilterContext'

export default function DateRangeFilter() {
  const { days, setDays, resetFilter } = useFilter()

  const options = [30, 60, 90]

  return (
    <div className="flex items-center gap-2">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => setDays(opt)}
          className={`px-4 py-2 rounded-lg border transition-all ${
            days === opt
              ? 'bg-brand-primary border-brand-primary'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
        >
          Últimos {opt} días
        </button>
      ))}
      <button
        onClick={resetFilter}
        className="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 ml-2"
      >
        Resetear
      </button>
    </div>
  )
}
