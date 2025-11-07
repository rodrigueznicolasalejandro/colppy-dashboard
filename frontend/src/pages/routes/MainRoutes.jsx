import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Dashboard from '../dashboard'

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}