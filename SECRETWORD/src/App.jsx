//CSS
import './App.css';
//REACT
import { useCallback, useEffect, useState } from 'react';
//data
import {wordsList} from "./data/words";
//components
import StartScreen from './components/StartScreen';
import Game from './components/game';
import Gameover from './components/Gameover';
const stages = [
  {id:1, name:"start",},
  {id:2, name:"game"},
  {id:3, name:"end"}
]


function App() {
const [gamestage, setGamestage] = useState(stages[0].name) // o estágio inicial é stages +> array zero.nome
// ou seja o nome zero que é start
const [words] =  useState(wordsList);
const [pickword, setPickedword] = useState("");
const [pickcategories, setPickcategories] = useState("");
const [letters, setLetters] = useState([]);


/// função que vai definir categoria e palavra
  function pickWordAndCategory() {
    //pegar palavra e catgoria
    const categories = Object.keys(words); //const categories = Object.keys(words): 


    //Esta linha cria uma variável chamada categories que contém todas as chaves (nomes de categoria) do objeto words. 
    //Object.keys() é uma função que retorna um array com todas as chaves de um objeto.
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    //puxou state words que aponta para word liist 
    //e selecionou o array category como especificadade
    // no array category fez a função aleatória dentro dessa categoria pela quantidade de palavras
    // 
    console.log(word);
    return { category, word };
  }

//// estagios do jogo

//start the secret word
const startgame = () => {

const {word, category} = pickWordAndCategory();
console.log(word, category);

 // a função split serve para separar uma string presentes no array, e um array de substring
let letters = word.split('');

//agora vai ser uma função corrigir uma caractéristica do javascript onde toda primeira letre é maiscula
//obrigando a quem usar imput usar uma letra maíscula
// a função vai utilizar um map que pega um arry original e transforma em outro com especificação
letters = letters.map((l) => l.toLowerCase())

// setando estados das palavras 
setPickedword(word);
setPickcategories(category);
setLetters(letters);

console.log(letters);
setGamestage(stages[1].name)
};

//processar a letra
const verifyLetter = () => {
  setGamestage(stages[2].name)
};
//resetar
const retry = () => {
setGamestage(stages[0].name)
}
  return (
  <div className='App'>
{/* ABAIXO PODEMOS VER uma lógica de como puxar um componente de acordo com estado de gamestage*/ }
{gamestage === "start" && <StartScreen startgame ={startgame}/>}
{gamestage === "game" && <Game verifyLetter={verifyLetter}/>}
{gamestage === "end" && <Gameover retry ={retry}/>}



  </div>
  )
}

export default App
