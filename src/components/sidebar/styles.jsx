import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextVersion = styled.p`
  font-family: Poppins;
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0.01em;
  text-align: center;
  margin: 0;

  > span {
    width: 43px;
    height: 34px;
    opacity: 0.5; /* Corrigi de 0px para 0.5 */
    font-family: Poppins;
    font-size: 15px;
    font-weight: 500;
    line-height: 22.5px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #838383;
  }
`;

export const Version = styled.div`
  align-content: end;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImgFooter = styled.img`
  height: 40px;
`;

export const SidebarContainer = styled.div`
  width: 320px; /* Largura da sidebar */
  height: 100vh; /* Altura total da viewport */
  background-color: #ffff; /* Cor de fundo */
  color: #000000; /* Cor do texto */
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5); /* Sombra */
  position: fixed; /* Fixa a sidebar à esquerda */
  transition: width 0.3s; /* Transição suave */
`;

export const MenuItem = styled(Link)` /* Adicione esta linha para exportar MenuItem */
  text-decoration: none; /* Remove o sublinhado */
  color: #9197B3; /* Cor do texto */
  padding: 15px 20px; /* Aumenta o padding */
  border-radius: 5px; /* Bordas arredondadas */
  transition: background-color 0.3s; /* Transição suave para o hover */
  cursor: pointer;
  font-family: Poppins; /* Corrigi a capitalização */
  font-size: 20px;

  &:hover {
    background-color: #5932EA; /* Cor ao passar o mouse */
    color: #fff; /* Cor do texto ao passar o mouse */
    text-decoration: none; /* Remove o sublinhado */
  }

  &:first-of-type {
    margin-top: 87px; /* Margem superior no primeiro item */
  }

  &.active {
    text-decoration: none; /* Remove sublinhado quando ativo */
  }

`;