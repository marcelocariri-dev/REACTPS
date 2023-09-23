import './Form1.css'
import { useState } from "react"

export const Form1 = ({user}) => {
const [nome, setNome] = useState(user ? user.nome : "");
const [Email, setEmail] = useState(user? user.Email : "");
const alunos = [{id: 1, Nome: "Yago"}, {id: 2, Nome: "Lins"}, {Id: 3, Nome: "Denise"}, 
{id:4, Nome:"Teofilo"}
,{id:5, Nome: "Franco"}]

const sorteio = () =>{ const func= Math.floor(Math.random() * alunos.length)
 return console.log(func)
}

const handlernome = (e) => {
    setNome(e.target.value)
}


const handleEmail = (e) => {
  setEmail(e.target.value)// e.target.value é função usada para imprimir o nome que esta sendo digitadono imput do envento
}
const handlesubmit = (event)=> {
event.preventDefault(); //função para não recarregar página ao colocar para enviar usando o imput submit
console.log(nome, Email)

}
console.log(nome)
  return (
    <div>
<form onSubmit={handlesubmit}> 

<div>
{/*TRADICONAL*/}
<label htmlFor="Nome">Nome</label>
<input type='text' name='Nome' placeholder='Digite seu nome' onChange={handlernome} value={nome
}/>
</div>
{/*com label envolvendo*/}
<label>
<span>Email</span>
<input type="text" nome="Email" placeholder='Digite seu email' onChange={handleEmail} value={Email} />
</label>
<input onClick={sorteio} type='submit' value="Enviar" />

</form>

    </div>
  )
}

export default Form1;