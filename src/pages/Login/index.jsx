import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      if (!response.ok) {
        throw new Error('Erro ao fazer login')
      }

      const data = await response.json()
      localStorage.setItem('token', data.token) // Armazena o token no localStorage
      navigate('/vendas')
    } catch (error) {
      console.error(error)
      alert('Credenciais inválidas')
    }
  }

  return (
    <S.Container>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <S.Input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <S.Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <S.Button type="submit">Login</S.Button>
      </form>
    </S.Container>
  )
}

export default Login
