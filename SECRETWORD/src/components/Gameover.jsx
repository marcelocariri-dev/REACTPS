import "./Gameover.css"

export const Gameover = ({retry}) => {
  return (
    <div><h1>
      Gameover
    
    </h1>
<button onClick={retry}>Jogar de novo!</button>

    </div>
  )
}
export default Gameover;