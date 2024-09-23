import React from 'react'

import { Link } from 'react-router-dom';

import logo from '../../assets/imgs/logo.png'
import logoAlt from '../../assets/imgs/logo-alt.png'
import {
  AppContainer,
  MainContent,
  Button,
  Footer,
  Rights,
  LogoFooter,
  ImgFooter,
  Version,
  TextVersion
} from './styles'

const Home = () => {
  return (
    <AppContainer>
      <MainContent>
        <img src={logo} alt="Logo da academia" />
        <Link to="/alunos">
          <Button type="button" className="btn btn-success">
            ENTRAR
          </Button>
        </Link>
      </MainContent>
      <Footer>
        <div>
          <LogoFooter src={logo} alt="Logo da academia" />
          <span>Project Manager</span>
        </div>
        <Version>
          <ImgFooter src={logoAlt} alt="Logo da academia" />
          <div>
            <TextVersion>
              2K FIT APP <span>V01</span>
            </TextVersion>
          </div>
        </Version>
      </Footer>
      <Rights>All Rights Reserved BY Envision Tech </Rights>
    </AppContainer>
  )
}

export default Home
