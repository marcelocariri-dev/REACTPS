import React from 'react'
//o destructing é feito ao colocar ao passar em chaves nos objetos de const PROPS
export const PROPS = ({brand, km, sTatus}) => {
  return (
    <div>
<ul>
<li>MARCA: {brand}</li>
<li>KM: {km}</li>
</ul>
{sTatus &&<p>Disponível</p>}     
    </div>
  )
}

export default PROPS