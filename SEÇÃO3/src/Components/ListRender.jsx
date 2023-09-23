import { useState } from "react"

export const ListRender = () => {
    const [list] = useState(["Paulo", "Mateus", "Marcos", "Lucas"]);

    const [users, setUsers] = useState([{id: 1, name: "Matheus", age:31},
  {id: 2, name: "Lucas", age:28},
  {id:3, name: "João", age: 30 }
  ])

  const deleterandom = () => {
const random = Math.floor(Math.random() * 4)

setUsers((prevUsers) =>{
 return prevUsers.filter((user) => random !== user.id)
 //Esta função é responsável por remover aleatoriamente 
 //um usuário do array users. Ela faz o seguinte:
//Gera um número aleatório entre 0 e 2 usando Math.random() 
//e Math.floor().
//Usa a função setUsers para atualizar o estado users. Ela recebe uma função que recebe prevUsers (os usuários atuais) como argumento.
//Dentro da função, usamos o método filter() para retornar um novo array de usuários que não inclui o usuário com o id igual ao número aleatório gerado.
})

  }
  return (
    <div>
<ul>
{list.map((item, i)=>(
    <li key={i}>{item}</li>
))}

</ul>
{users.map((user) => (
<li key = {user.id}>{user.age}-{user.name}</li>

))}
<button onClick={deleterandom}>DELETE UM USUARIO</button>
<ul>


</ul>
    </div>
  );
};

export default ListRender