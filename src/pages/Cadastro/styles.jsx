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
export const BtnVenda = styled.button`
  height: 3em;
  width: 20em;
  background-color: #09a824;
  border: none;
  border-radius: 7px;
  margin-right: 30px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`

// Estilização dos grupos de formulários
export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    color: #555;
    margin-bottom: 5px;
  }
`

// Estilização do campo de texto
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`
export const DivBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`

// Estilização do campo de seleção
export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`

export const ProdutoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 16px;
    color: #333;
    margin-right: 10px;
  }

  input {
    width: 80px;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;

    &:focus {
      border-color: #3498db;
      outline: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-bottom: 5px;
    }

    input {
      width: 100%;
    }
  }
`
