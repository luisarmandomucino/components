
import './App.css';
import Greeting from './components/greeting/greeting';
import Parragraph from './components/comp2/parrafo';
import Generation from './components/greeting/generation';
import { Footer, Navbr } from './components/navbar/navbr';
import CounterPage from './components/counter/counter-page';
import MyButton from './components/button/my-button';

function App() {
  return (
    <div className="App">
      <Navbr/>
      <CounterPage/>
      <MyButton/>
      {/* <Greeting/>
      <Generation/>
      <Footer/> */}
    </div>
  );
}

export default App;
