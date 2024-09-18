import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ocupa toda a altura da viewport */
`

export const MainContent = styled.div`
  flex: 1; /* Faz com que o MainContent ocupe o espaço disponível */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  text-align: center; /* Centraliza o texto, se necessário */
`

export const Button = styled.button`
  width: 387px;
  height: 74px;
  padding: 1rem 2rem;
  font-size: 3.25rem;
  border-radius: 0.5rem;
  background-color: #7ed957;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #90d174;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem; /* Adicione algum padding para o rodapé */
  margin-top: auto; /* Garante que o rodapé vá para o final da página */

  > div > span {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #757575;
  }
`

export const Rights = styled.div`
  font-family: Poppins;
  display: flex;
  justify-content: center;
`

export const LogoFooter = styled.img`
  height: 97px;
`

export const ImgFooter = styled.img`
  height: 40px;
`

export const Version = styled.div`
  align-content: end;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const TextVersion = styled.p`
  font-family: Poppins;
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0.01em;
  text-align: left;
  margin: 0;

  > span {
    width: 43px;
    height: 34px;
    opacity: 0px;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 500;
    line-height: 22.5px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #838383;
  }
`
