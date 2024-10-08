import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Vendas from './pages/Vendas'
import Login from './pages/Login'
import Registro from './pages/Registro'
import RotaProtegida from './components/RotaProtegida/RotaProtegida'
import Solicitacoes from './pages/Solicitacoes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registro" element={<Registro />} />

    <Route
      path="/cadastro"
      element={<RotaProtegida element={<Cadastro />} />}
    />
    <Route path="/vendas" element={<RotaProtegida element={<Vendas />} />} />
    <Route
      path="/solicitacoes"
      element={<RotaProtegida element={<Solicitacoes />} />}
    />
  </Routes>
)

export default Rotas
