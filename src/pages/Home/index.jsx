import { Link } from 'react-router-dom'

import {
  AppContainer,
  MainContent,
  Button,
  Footer,
  Rights,
  Version,
  TextVersion
} from './styles'

const Home = () => {
  return (
    <AppContainer>
      <MainContent>
        <Link to="/vendas">
          <Button type="button" className="btn btn-success">
            ENTRAR
          </Button>
        </Link>
      </MainContent>
      <Footer>
        <div>
          <span>Project Manager</span>
        </div>
        <Version>
          <div>
            <TextVersion>
              Admin SeuBoné <span>V01</span>
            </TextVersion>
          </div>
        </Version>
      </Footer>
      <Rights>All Rights Reserved BY SeuBone </Rights>
    </AppContainer>
  )
}

export default Home
