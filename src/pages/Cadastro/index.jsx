import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

import Sidebar from '../../components/sidebar'
import * as S from './styles'

const Cadastro = () => {
  const [cliente, setCliente] = useState('')
  const [tpPagamento, setTpPagamento] = useState('0')
  const [regiao, setRegiao] = useState('0')
  const [produtos, setProdutos] = useState([])
  const [selectedProdutos, setSelectedProdutos] = useState([])
  const [produtoSelecionado, setProdutoSelecionado] = useState('')
  const [quantidade, setQuantidade] = useState(1)
  const [prazo, setPrazo] = useState('0')
  const [desconto, setDesconto] = useState(0)
  const [mensagem, setMensagem] = useState('') // Estado para a mensagem

  // >>> Busca todos os produtos para aparecer no input
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/produtos')
        const data = await response.json()
        setProdutos(data)
      } catch (err) {
        console.error(`Ocorreu um erro: ${err}`)
      }
    }
    fetchProdutos()
  }, [])

  // >>> Post das venda/solicitacao
  const handleSubmit = async (e) => {
    e.preventDefault()

    const venda = {
      cliente,
      tpPagamento,
      regiao,
      prazo,
      desconto,
      produtos: selectedProdutos
    }

    try {
      const response = await fetch('http://localhost:3001/api/vendas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(venda)
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Venda registrada com sucesso:', data)

        setMensagem(data.mensagem)

        setCliente('')
        setTpPagamento('0')
        setRegiao('0')
        setSelectedProdutos([])
        setProdutoSelecionado('')
        setQuantidade(1)
        setPrazo('0')
        setDesconto(0)
      } else {
        console.error('Erro ao registrar a venda')
      }
    } catch (err) {
      console.error(`Ocorreu um erro: ${err}`)
    }
  }

  // >>> Adiciona produto à lista de selecionados
  const handleAddProduto = () => {
    if (!produtoSelecionado) return

    setSelectedProdutos((prev) => {
      const produtoExistente = prev.find(
        (p) => p.sku === produtoSelecionado.sku
      )
      if (produtoExistente) {
        return prev.map((p) =>
          p.sku === produtoSelecionado.sku
            ? { ...p, quantidade: p.quantidade + quantidade }
            : p
        )
      } else {
        return [...prev, { ...produtoSelecionado, quantidade: quantidade }]
      }
    })

    setProdutoSelecionado('')
    setQuantidade(1)
  }

  return (
    <div>
      <S.DivPrincipal>
        <Sidebar />
        <S.Content>
          <S.Dashboard>
            <S.Head>
              <div>
                <S.Titulo>Cadastrar Venda:</S.Titulo>
              </div>
              <div>
                <Link to="/Vendas">
                  <S.Btn>Voltar para as vendas</S.Btn>
                </Link>
              </div>
            </S.Head>
            <form onSubmit={handleSubmit}>
              <S.FormGroup>
                <label>Nome do Cliente:</label>
                <S.Input
                  type="text"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  required
                />
              </S.FormGroup>

              <S.FormGroup>
                <label>Tipo de Pagamento:</label>
                <S.Select
                  value={tpPagamento}
                  onChange={(e) => setTpPagamento(e.target.value)}
                >
                  <option value="0">Cartão de Crédito</option>
                  <option value="1">Pix</option>
                </S.Select>
              </S.FormGroup>

              <S.FormGroup>
                <label>Região:</label>
                <S.Select
                  value={regiao}
                  onChange={(e) => setRegiao(e.target.value)}
                >
                  <option value="0">Nordeste</option>
                  <option value="1">Norte</option>
                  <option value="2">Sudeste</option>
                  <option value="3">Centro-Oeste</option>
                  <option value="4">Sul</option>
                </S.Select>
              </S.FormGroup>

              <S.FormGroup>
                <label>Desconto: R$ (Em reais) </label>
                <S.Input
                  type="number"
                  value={desconto}
                  onChange={(e) => setDesconto(e.target.value)}
                />
              </S.FormGroup>

              <S.FormGroup>
                <label>Prazo:</label>
                <S.Select
                  value={prazo}
                  onChange={(e) => setPrazo(e.target.value)}
                >
                  <option value="0">Padrão</option>
                  <option value="1">Turbo</option>
                  <option value="2">Super Turbo</option>
                </S.Select>
              </S.FormGroup>

              <S.FormGroup>
                <label>Produto:</label>
                <S.Select
                  value={produtoSelecionado.sku || ''}
                  onChange={(e) => {
                    const produto = produtos.find(
                      (p) => p.sku === e.target.value
                    )
                    setProdutoSelecionado(produto)
                  }}
                >
                  <option value="">Selecione um produto</option>
                  {produtos.map((produto) => (
                    <option key={produto.sku} value={produto.sku}>
                      {produto.produto}
                    </option>
                  ))}
                </S.Select>
              </S.FormGroup>

              <S.FormGroup>
                <label>Quantidade:</label>
                <S.Input
                  type="number"
                  value={quantidade}
                  min="1"
                  onChange={(e) => setQuantidade(parseInt(e.target.value))}
                />
                <S.DivBtn>
                  <S.Btn type="button" onClick={handleAddProduto}>
                    Adicionar Produto
                  </S.Btn>
                  <S.BtnVenda type="submit">Cadastrar Venda</S.BtnVenda>
                </S.DivBtn>
              </S.FormGroup>

              {/* Lista de produtos selecionados */}
              {selectedProdutos.length > 0 && (
                <S.FormGroup>
                  <h3>Produtos Selecionados:</h3>
                  {selectedProdutos.map((produto) => (
                    <div key={produto.sku}>
                      <span>
                        {produto.produto} - Quantidade: {produto.quantidade}
                      </span>
                    </div>
                  ))}
                </S.FormGroup>
              )}
            </form>
            {/* Mensagem para o usuário */}
            {mensagem && <div>{mensagem}</div>}
          </S.Dashboard>
        </S.Content>
      </S.DivPrincipal>
    </div>
  )
}

export default Cadastro
