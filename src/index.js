import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// aquí ya se importó la función que está exportada con el metodo default ("export default")
import Greeting from './components/greeting/greeting';

/*
React.StrictMode: es un componente de react que se utiliza en el desarrollo para detectar y advertir sobre posibles problemas en una aplicación 


*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    
  </React.StrictMode>
);


