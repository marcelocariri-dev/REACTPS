import { useState, useRef } from "react"
import "./Game.css"

 
export const Game = ({verifyLetter, 
pickword, 
pickcategories, 
letters,
letrasTentadas,
letrasErradas,
tentativas,
placar }) => {
const [letter, setLetter] =  useState("");
const ref =  useRef(null)
const enviodoform =  (e) => {
  e.preventDefault(); //para impedir que pagina carregue 
  verifyLetter(letter);
  setLetter(""); // ta marcado a função value na caixa de entrada onde atualiza o estado letter
  //ent assim sempre fica vazio dos de lançar a função de verify
ref.current.focus();
}
  return (
    <div> <div className="game"></div>
    <p className="points">
      <span> Pontuação:{placar}</span> {/*o span ele serve para acrescentrar elementos sem quebrar a linha
      ou estilizar css, sem dá problema aos outros elementos que ele esta concatenado */}
    </p>
    <h1>Adivinhe a palavra</h1>

    <h3 className="tip">
    DICA SOBRE A PALAVRA: <span>{pickcategories}</span> 
    </h3>
    <h4><span>Permitdas {tentativas} tentativas.</span></h4>

    <div className="wordcontainer">
  {letters.map((letter, i) => (letrasTentadas.includes(letter)?
  (<span key={i} className="letter">{letter}</span>):
  (<span key={i} className="quadradobranco"></span>)
  ))}
    
   
    </div>
  <div className="lettercontainer">
 <p> tente advinhar uma palavra</p>
 <form onSubmit={enviodoform}> 
<input type="text" name="letter" maxlenght="1" required onChange={(e)=>setLetter(e.target.value)}
// acima no ao mudar "onChange" foi chamado a função arrow inline, nela foi passado o evento como parametro
// e definido que será setado o estado de letter pelo valor da caixa de entrada 
// então toda vez que mudar será setado o valor da caixa de entrada para letter 
value={letter}
ref={ref}/>
<button>jogar</button>
 </form>
</div>
<div className="wrongLettersContainer">
<p>Letras já utilizadas:</p>
{letrasErradas.map((letrarrada, i) =>( <span key={i}>{letrarrada}</span>


))}

</div>
</div>
  )
}

export default Game;
