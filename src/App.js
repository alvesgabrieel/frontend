import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal from './styles'

import Rotas from './routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
