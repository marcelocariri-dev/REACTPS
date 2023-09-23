import { useState } from 'react'
import './App.css'
import FIRSTCOMPONENT from './components/firtscomponents';
import Events from './components/Events';
import Mychallenge from './components/mychallenge';

function App() {
  const [count, setCount] = useState(0)

  return (
    
<div>
<h1> </h1>
<FIRSTCOMPONENT/> 
<Events></Events>
<Mychallenge/>

<p className="teste">TEXTO CLASS</p>
      </div>
      
    
  )
}

export default App
