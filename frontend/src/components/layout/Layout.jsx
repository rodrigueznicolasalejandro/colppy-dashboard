import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
        <header className="colppy-primary mx-auto">
            <div className="max-w-6xl mx-auto flex items-center pt-6 pb-6">
            <img
              src="https://colppy.com/hubfs/Sistema%20de%20gesti%C3%B3n%20contable.svg"
              height="25"
              width="120"
              alt="Sistema de gestión contable"
              title="Sistema de gestión contable"
              className="ml-4 mr-r"
              />        
            </div>
        </header>
        <div className="max-w-6xl mx-auto">
            <h1 className="text-center pt-12 pb-10 text-6xl">Dashboard Analítico</h1>
            <div className="line-divider"></div>
            <p className="m-4">Actualización en tiempo real (cada 5s)</p>
        </div>
        <Outlet />
    </div>
  )
}
