import React from 'react'

export const Userdet = ({nome,idade}) => {
  return (
    <div>
    <ul>
    <li>nome: {nome}</li>
    <li> idade:{idade}</li>
    {idade >= 18 ? (<li>habilitado</li>):(<div> deu ruim</div>)}
    </ul>
    
    </div>
  )
}
export default Userdet;