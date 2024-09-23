import React from 'react';
import { SidebarContainer, MenuItem, TextVersion, Version, ImgFooter } from './styles';
import logoAlt from '../../assets/imgs/logo-alt.png';
import { PiUserCircleThin, PiUserCirclePlusThin  } from "react-icons/pi";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Version>
        <ImgFooter src={logoAlt} alt="Logo da academia" />
        <div>
          <TextVersion>
            2K FIT APP <span>V01</span>
          </TextVersion>
        </div>

        
      </Version>
      
        <MenuItem to='/Cadastro'>
        <PiUserCircleThin size={24} style={{ marginRight: '10px' }} /> {/* Ícone para Cadastro */}
            Cadastro de alunos
        </MenuItem>
        <MenuItem to='/Alunos'>
        <PiUserCirclePlusThin size={24} style={{ marginRight: '10px' }} /> {/* Ícone para Cadastro */}
            Alunos
        </MenuItem>
      
    </SidebarContainer>
  );
}

export default Sidebar;