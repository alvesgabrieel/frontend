import React from 'react'
import { useNavigate } from 'react-router-dom' // Importando useNavigate
import { FaHome } from 'react-icons/fa'
import { AiFillFund } from 'react-icons/ai'

import * as S from './styles'

const Sidebar = () => {
  const navigate = useNavigate() // Hook para navegação

  const handleLogout = () => {
    localStorage.removeItem('token') // Remove o token do localStorage
    navigate('/login')
  }

  return (
    <div>
      <S.SidebarContainer>
        <S.Version>
          <div>
            <S.TextVersion>
              Dashboard<span>V01</span>
            </S.TextVersion>
          </div>
        </S.Version>

        <S.MenuItem to="/Cadastro">
          <FaHome size={24} style={{ marginRight: '10px' }} /> Cadastro de
          Pedidos
        </S.MenuItem>
        <S.MenuItem to="/vendas">
          <AiFillFund size={24} style={{ marginRight: '10px' }} /> Pedidos
        </S.MenuItem>

        <S.LogoutContainer>
          <S.LogoutButton onClick={handleLogout}>Sair</S.LogoutButton>
        </S.LogoutContainer>
      </S.SidebarContainer>
    </div>
  )
}

export default Sidebar
