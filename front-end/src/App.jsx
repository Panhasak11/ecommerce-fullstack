import React from 'react'
import LoginPage from './pages/login/LoginPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ProtectedRoute from './components/routes/ProtectedRoute'
import Dashboard from './pages/admin/Dashboard'
import Homepage from './pages/client/Homepage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
            path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
