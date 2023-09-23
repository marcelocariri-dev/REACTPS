import React from 'react'

export const Showmessage = ({myfunction}) => {
  return (
    <div>
        <button onClick={myfunction}> clique para imprimir a função como prop</button>
    </div>
  )
}

export default Showmessage