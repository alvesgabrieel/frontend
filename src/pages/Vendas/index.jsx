import { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api'

import * as S from './styles'

const Vendas = () => {
  const [vendas, setVendas] = useState([])
  const [filter, setFilter] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  // Rota para listar todas as vendas
  useEffect(() => {
    const fetchVendas = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/vendas')
        const data = await response.json()

        setVendas(data)
        console.log(data)
      } catch (err) {
        console.error('Erro ao buscar as vendas', err)
      }
    }

    fetchVendas()
  }, [])

  // > retorna o usuario, para saber o tipo de usuario
  useEffect(() => {
    const fetchLoggedUser = async () => {
      const token = localStorage.getItem('token') // Certifica de que o token está armazenado no localStorage

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

  const formatarData = (data) => {
    const date = new Date(data) // Cria um objeto Date
    const dia = String(date.getDate()).padStart(2, '0') // Obtém o dia com dois dígitos
    const mes = String(date.getMonth() + 1).padStart(2, '0') // Obtém o mês (0-11) e adiciona 1, com dois dígitos
    const ano = date.getFullYear() // Obtém o ano

    return `${dia}/${mes}/${ano}` // Retorna a data formatada
  }

  const numeroParaString = (numero) => {
    return `${numero}`
  }

  // Função de filtro
  const filteredVendas = vendas.filter((venda) => {
    return (
      venda.id.toString().includes(filter) ||
      venda.cliente.toLowerCase().includes(filter.toLowerCase())
    )
  })

  return (
    <S.DivPrincipal>
      <Sidebar />
      <S.Content>
        <S.Dashboard>
          <S.Head>
            <div>
              <S.Titulo>{user ? `Olá, ${user.username}` : 'Olá'}</S.Titulo>
            </div>
            <div>
              <S.Input
                type="text"
                placeholder="Filtrar vendas pelo nome do cliente"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <Link to="/Cadastro">
                <S.Btn>Cadastrar venda</S.Btn>
              </Link>
            </div>
          </S.Head>

          <S.ListaVendas>
            <S.TabelaContainer>
              <S.Tabela>
                <S.TabelaHeader>
                  <tr>
                    <S.TabelaHeaderCell>ID</S.TabelaHeaderCell>
                    <S.TabelaHeaderCell>Data da Venda</S.TabelaHeaderCell>
                    <S.TabelaHeaderCell>Total</S.TabelaHeaderCell>
                    <S.TabelaHeaderCell>Cliente</S.TabelaHeaderCell>
                    <S.TabelaHeaderCell>Status</S.TabelaHeaderCell>
                  </tr>
                </S.TabelaHeader>
                <S.TabelaBody>
                  {filteredVendas.map((venda) => (
                    <tr key={venda.id}>
                      <S.TabelaCell>{venda.id}</S.TabelaCell>
                      <S.TabelaCell>
                        {formatarData(venda.data_venda)}
                      </S.TabelaCell>
                      <S.TabelaCell>
                        R$ {numeroParaString(venda.total)}
                      </S.TabelaCell>
                      <S.TabelaCell>{venda.cliente}</S.TabelaCell>
                      <S.TabelaCell>
                        <S.Status>Aprovado</S.Status>
                      </S.TabelaCell>
                    </tr>
                  ))}
                </S.TabelaBody>
              </S.Tabela>
            </S.TabelaContainer>
          </S.ListaVendas>
          {user && user.role === 'gerente' ? (
            <div>
              <S.Btn onClick={() => navigate('/solicitacoes')}>
                Ver solicitações de vendas
              </S.Btn>
            </div>
          ) : (
            <div></div>
          )}
        </S.Dashboard>
      </S.Content>
    </S.DivPrincipal>
  )
}

export default Vendas
