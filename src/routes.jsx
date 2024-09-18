import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Alunos from './pages/Alunos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Cadastro" element={<Cadastro />} />
    <Route path="/Alunos" element={<Alunos />} />
  </Routes>
)

export default Rotas
