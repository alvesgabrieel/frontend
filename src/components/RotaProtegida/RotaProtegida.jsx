import React from 'react'
import { Navigate } from 'react-router-dom'

const RotaProtegida = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token') // Verifica se o token existe

  return isAuthenticated ? element : <Navigate to="/login" />
}

export default RotaProtegida
