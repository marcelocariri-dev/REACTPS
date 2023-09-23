import React from 'react'

export const Changemsgs = ({handlermessages}) => {
    const msgs = ["oi", "ola", "boa noite"]
  return (
    <div> 
    <button onClick={()=>handlermessages(msgs[0])}>oi</button>
    <button onClick={()=>handlermessages(msgs[1])}>ola</button>
    <button onClick={()=>handlermessages(msgs[2])}>boa noite</button>
  </div>
)
  
}

export default Changemsgs;