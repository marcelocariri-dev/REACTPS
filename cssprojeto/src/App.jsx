import './App.css'
import Form1 from './components/Form1';
import Titleindex from './components/Titleindex';

function App() {

  return (
    <div>
<Titleindex/>

<Form1 user={{nome:"jose", email:"jose@gmail.com"}} />
    </div>
  )
}

export default App
