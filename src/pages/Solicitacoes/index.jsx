import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import Sidebar from '../../components/sidebar'

const Solicitacoes = () => {
  const [filter, setFilter] = useState('') // Ajuste o valor inicial para string
  const [solicitacoes, setSolicitacoes] = useState([])
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/solicitacoes')
        const data = await response.json()

        setSolicitacoes(data)
      } catch (err) {
        console.error(`Erro ao buscar as solicitações`, err)
      }
    }

    fetchSolicitacoes()
  }, [])

  useEffect(() => {
    const fetchLoggedUser = async () => {
      const token = localStorage.getItem('token') // Certifica que o token está armazenado no localStorage

      if (!token) {
        setError('Token não encontrado. Por favor, faça login novamente.')
        return
      }

      try {
        const response = await fetch(
          'http://localhost:3001/api/users/loggedUser',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        )

        if (response.status === 404) {
          setError('Usuário não encontrado.')
          return
        }

        if (!response.ok) {
          setError('Erro ao buscar o usuário logado.')
          return
        }

        const data = await response.json()
        setUser(data)
      } catch (err) {
        console.error('Erro na requisição:', err)
        setError('Erro na requisição.')
      }
    }

    fetchLoggedUser()
  }, [])

  // Função para aceitar solicitação
  const handleAcceptSolicitation = async (id) => {
    const token = localStorage.getItem('token')
    if (!token) {
      setError('Token não encontrado. Por favor, faça login novamente.')
      return
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/solicitacoes/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ status: 'aceito' }) // Envia o novo status
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao aceitar a solicitação.')
      }

      const updatedSolicitation = await response.json()
      setSolicitacoes((prevSolicitacoes) =>
        prevSolicitacoes.map((solicitacao) =>
          solicitacao.id === id
            ? { ...solicitacao, status: 'aceito' }
            : solicitacao
        )
      )

      alert(updatedSolicitation.mensagem)
    } catch (err) {
      console.error('Erro ao aceitar a solicitação:', err)
      setError('Erro ao aceitar a solicitação.')
    }
  }

  // Função de filtro
  const filteredSolicitacao = solicitacoes.filter((solicitacao) => {
    return (
      solicitacao.id.toString().includes(filter) ||
      solicitacao.cliente.toLowerCase().includes(filter.toLowerCase())
    )
  })

  return (
    <S.DivPrincipal>
      <Sidebar />
      <S.Content>
        <S.Dashboard>
          {user && user.role === 'gerente' ? (
            <>
              <S.Head>
                <div>
                  <S.Titulo>{user ? `Olá, ${user.username}` : 'Olá'}</S.Titulo>
                </div>
                <div>
                  <S.Input
                    type="text"
                    placeholder="Filtar solicitação pelo nome do cliente"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  <Link to="/Vendas">
                    <S.Btn>Voltar para vendas</S.Btn>
                  </Link>
                </div>
              </S.Head>

              <S.ListaVendas>
                <S.TabelaContainer>
                  <S.Tabela>
                    <S.TabelaHeader>
                      <tr>
                        <S.TabelaHeaderCell>ID</S.TabelaHeaderCell>
                        <S.TabelaHeaderCell>Total</S.TabelaHeaderCell>
                        <S.TabelaHeaderCell>Cliente</S.TabelaHeaderCell>
                        <S.TabelaHeaderCell>Status</S.TabelaHeaderCell>
                        <S.TabelaHeaderCell>Aceite</S.TabelaHeaderCell>
                      </tr>
                    </S.TabelaHeader>
                    <S.TabelaBody>
                      {filteredSolicitacao.map(
                        (
                          solicitacao // Altere aqui para usar 'filteredSolicitacao'
                        ) => (
                          <tr key={solicitacao.id}>
                            <S.TabelaCell>{solicitacao.id}</S.TabelaCell>
                            <S.TabelaCell>R$ {solicitacao.total}</S.TabelaCell>
                            <S.TabelaCell>{solicitacao.cliente}</S.TabelaCell>
                            <S.TabelaCell>
                              <S.StatusColor
                                isAccepted={solicitacao.status === 'aceito'}
                              >
                                {solicitacao.status || 'Pendente'}
                              </S.StatusColor>
                            </S.TabelaCell>
                            <S.TabelaCell>
                              <S.Btn
                                onClick={() =>
                                  handleAcceptSolicitation(solicitacao.id)
                                } // Corrigido aqui
                              >
                                Aceitar Solicitação
                              </S.Btn>
                            </S.TabelaCell>
                          </tr>
                        )
                      )}
                    </S.TabelaBody>
                  </S.Tabela>
                </S.TabelaContainer>
              </S.ListaVendas>
            </>
          ) : (
            <div></div>
          )}
        </S.Dashboard>
      </S.Content>
    </S.DivPrincipal>
  )
}

export default Solicitacoes
