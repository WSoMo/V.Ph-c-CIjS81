import Textleft from './components/Textleft';
import Right from './components/Right';
import But from './components/But'
import './App.css';



function App() {
  return(
    <div className='main'>
      <div className='containerleft'>
      <Textleft />
      </div>
      <div className='containerright'>
      <Right />
      <But />
      </div>
    </div>
    )

}
export default App;
