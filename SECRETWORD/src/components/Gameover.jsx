import "./Gameover.css"

export const Gameover = ({retry}) => {
  return (
    <div>Gameover
<button onClick={retry}>Jogar de novo!</button>

    </div>
  )
}
export default Gameover;