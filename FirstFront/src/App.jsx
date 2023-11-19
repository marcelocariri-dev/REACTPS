import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Login from './components/login'
const stages = [
  {id:1, name:"login",},
  {id:2, name:"nav"},
  {id:3, name:"menu"}
]
function App() {
  
const [webstages, setWebStages] = useState(stages[0].name)
const Login = () => {
  setWebStages(stages[1].name)
}
  return ( <div className='App'>
  {webstages === 'login' && <Login Login={Login}/>}
  </div>
 
  )
}

export default App
