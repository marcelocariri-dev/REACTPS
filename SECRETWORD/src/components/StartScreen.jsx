import "./StartScreen.css";
export const StartScreen = ({startgame}) => {
  return (
    <div className="start">
<h1>SECRET WORD</h1>
<p>Clique bo botão abaixo para começar a jogar</p>
<button onClick={startgame}>Começar o jogo</button>
    </div>
  )
}
export default StartScreen;