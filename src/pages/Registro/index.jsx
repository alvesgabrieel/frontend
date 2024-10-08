// Register.js
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

const Registro = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post('http://localhost:3001/api/register', {
        username,
        password
      })
      alert(`Usuário registrado com sucesso!`)
      navigate('/login')
    } catch (err) {
      setError(err.response.data || 'Erro ao registrar usuário.')
    }
  }

  return (
    <S.Container>
      <h2>Registrar</h2>
      <S.Form onSubmit={handleSubmit}>
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
        {error && <S.Message>{error}</S.Message>}
        <S.Button type="submit">Registrar</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default Registro
