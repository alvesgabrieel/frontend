import styled from 'styled-components'

export const DivPrincipal = styled.div`
  display: grid;
  grid-template-columns: 364px 1fr; /* 25% para a navbar, 75% para o conteúdo */
  height: 100vh; /* Altura total da viewport */
`

export const Content = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh; /* Faz o container ocupar a tela inteira */
  background-color: #f9f9f9;
`
export const Dashboard = styled.div`
  width: 90vw; /* 90% da largura da viewport */
  max-width: 1400px; /* Limite máximo de 1400px */
  height: 70vh; /* 70% da altura da viewport */
  max-height: 700px; /* Limite máximo de 700px */
  background-color: #fff;
  padding: 20px; /* Adiciona algum espaçamento interno para o conteúdo */
  border-radius: 15px;
`
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px;
`
export const Titulo = styled.h3`
  font-size: 2em;
`
export const Input = styled.input`
  height: 3em;
  width: 20em;
  background-color: #ececec;
  border: none;
  border-radius: 7px;
  margin-right: 30px;
  padding: 7px;
`
export const Btn = styled.button`
  height: 3em;
  width: 20em;
  background-color: #0988a8;
  border: none;
  border-radius: 7px;
  margin-right: 30px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`

export const ListaVendas = styled.div`
  padding: 7px;
  margin-top: 30px;
`
export const TabelaContainer = styled.div`
  margin: 20px;
  overflow-x: auto; /* Para permitir rolagem em telas menores */
`

export const Tabela = styled.table`
  width: 100%;
  border-collapse: separate; /* Use 'separate' para aplicar bordas arredondadas */
  border-spacing: 0; /* Remove o espaçamento entre células */
  border-radius: 10px; /* Adiciona borda arredondada à tabela */
  overflow: hidden; /* Garante que o arredondamento seja aplicado corretamente */
`

export const TabelaHeader = styled.thead`
  background-color: #0988a8;
  color: white;
`

export const TabelaHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`

export const TabelaBody = styled.tbody`
  background-color: #f8f9fa;
`

export const TabelaCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`
export const Status = styled.td`
  display: inline-block;
  background: #74ff74;
  padding: 15px;
  border-radius: 15px;
`
