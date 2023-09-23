import "./Game.css"

export const Game = ({verifyLetter}) => {
  return (
    <div> <div className="game"></div>
    <p className="points">
      <span>Pontuação: 000</span> {/*o span ele serve para acrescentrar elementos sem quebrar a linha
      ou estilizar css, sem dá problema aos outros elementos que ele esta concatenado */}
    </p>
    <h1>Adivinhe a palavra</h1>
    <h3 className="tip">
    dica sobre a  palavra <span>dica..</span> </h3>
    <div className="wordcontainer">
    <span className="letter">a</span>
    <span className="quadradobranco"></span>
    </div>
  <div className="lettercontainer">
 <p> tente advinhar uma palavra</p>
 <form>
<input type="text" name="letter" maxLenght="1" required/>
<button>jogar</button>
 </form>
  </div>
</div>
  )
}

export default Game;
