import './App.css'
import SEÇÃO3 from './Components/SEÇÃO3'
import { ManageData } from './Components/ManageData'
import { ListRender } from './Components/ListRender'
import Condicional from './Components/Condicional'
import PROPS from './Components/PROPS'
import Fragments from './Components/Fragment'
import Container  from './Components/Container'
import Showmessage  from './Components/Showmessage'
import EXECUTE from './Components/EXECUTE'
import Changemsgs from './Components/Changemsgs'
import { useState } from 'react'
import Userdet from './Components/Userdet'


function App() {
const listadecarros = [{id:1,brand:"Davince", km: 1000, sTatus:"true",},
{id: 2, brand:"Uno", km:0, sTatus: false,},
{id: 3, brand:"CORSA", km:1110, sTatus: false}]
const pessoas = [{id:1, nome:"ruiz", idade: 18,},
{id: 2, nome:"Carla", idade: 15,},
{id: 3, nome:"CORSA",  idade: 25}]


function showmessage(){
  console.log("mensagem do em passar função como prop")
};



const [message, setMessage] = useState("");

const handlermessages = (msg) =>{
  setMessage(msg)

};
  return (

      
<div>

  <meta name="author" content="Adtile"></meta>
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
    <link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
  
<SEÇÃO3/>
<ManageData/>
<ListRender/>
<Condicional/>
{/*props com destructuring*/}
<PROPS brand="BMW" km={1000} sTatus={true} />
{/*reaproveitando os componentes*/}
{listadecarros.map((lcarros)=>(
<PROPS key={lcarros.id} brand={lcarros.brand} km={lcarros.km} sTatus={lcarros.sTatus} />
))}
{/* FRAGment*/}
<Fragments/>
{/*CHILDREN*/}
<Container>
<p>este é o contéudo da class pai</p>
</Container>
{/*passar a função com prop*/}
<Showmessage myfunction= {showmessage}/>
{/*statelift*/}
<EXECUTE msg={message}/>
<Changemsgs handlermessages={handlermessages}/>
{pessoas.map((pessoa)=>(
<Userdet key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade}/>
))}


<div><img src="/aressurreiçãodelazaro.jpg" alt="CARAVAGGIO1"/></div>
</div>
  )
}

export default App
