import React, { useEffect } from 'react'
import Sidebar from '../../components/sidebar'

const Alunos = () => {

  useEffect(() => {
    // Muda a cor do background do body
    document.body.style.backgroundColor = '#efefef'; // Escolha a cor que desejar

    // Restaura a cor original quando o componente é desmontado
    return () => {
      document.body.style.backgroundColor = ''; // Restaura a cor original
    };
  }, []);
  return(
    <>
      <Sidebar />
    </>
  )
}

export default Alunos
