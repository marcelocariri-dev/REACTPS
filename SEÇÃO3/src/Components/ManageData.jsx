import { useState } from "react"

export const ManageData = () => {
let somedata = 10
const [number, SetNumber] = useState();
  return (

    <div>
    <p>Valor: {number}</p>
<button onClick={() => SetNumber(25)}>ALTERE O VALOR</button>      
    </div>
  )
}
export default ManageData