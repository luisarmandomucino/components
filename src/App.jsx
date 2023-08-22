
import './App.css';
import Greeting from './components/greeting/greeting';
import Parragraph from './components/comp2/parrafo';
import Generation from './components/greeting/generation';
import { Footer, Navbr } from './components/navbar/navbr';

function App() {
  return (
    <div className="App">
      <Navbr/>
      <Greeting/>
      <Generation/>
      <Footer/>
    </div>
  );
}

export default App;
