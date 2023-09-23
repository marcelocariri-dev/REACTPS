import { useState } from "react"

const Condicional = () => {

const [x] =  useState(false)

const [tasks, setTasks] = useState([{id: 1, titulo1: "LISTA", lista: "1-FEIJÃO,\n 2 ARROZ"}])
//adcionar no  array
const adcionararray = () =>{
    setTasks(prevTask =>[...prevTask, {id:2, titulo2: "NOVOT", lista: "novalista"}]

    )
    const deletearray = () => {
        const random = Math.floor(Math.random * 8)
    setTasks((prevTask)=> {
        return prevTask.filter((task) => random !== task.id )
    })
    }
};
console.log('atual estado: ', tasks)
  return (
  //condição usestate usando true e false,
    <div>
<h1>ISSO VAI APARECER</h1>
{x &&<p>Se x for true, sim</p>}
{!x &&<p>Se x for false, sim</p>}

//condição use state usando uma lista como estado e uma função para adciona-la
{tasks.length >= 1 ? (
<ul>{tasks.map((task) => (<li key={task.id}>
{task.lista}
</li>))}</ul>
) : (
  <div> é diferente de 1</div>
)}

<button onClick={adcionararray}>CLICA PARA ADCIONAR</button>   
    


    </div>
  );
};

export default Condicional