import { useState } from "react";

export const Counter = () => {
  console.log("Estoy dentro del componente Counter");

//   let counterValue = 100;

  // hook useState 
  // useState permite a los componentes gestionar su propio estado
  const [ counterValue, setCounter] = useState( 100);


  const handleIncrement = () => {
    console.log("Estoy en fnc increment");
    setCounter (counterValue +1 );
    console.log ("Contador" + counterValue)
  };

  const handleDecrement = () => {
    console.log("Estoy en la fnc decrement");
    setCounter (counterValue -1 );
    console.log ("Contador" + counterValue)
  };

//   const handleReset = () =>{ 
//     console.log ("Estás en el 100 otra vez")
//     counterValue = 100 
    
//   }

  return (
    <>
      <p>Contador: {counterValue}</p>
      <button onClick={handleDecrement}> Decrementar</button>
      <button onClick={handleIncrement}> Incrementar</button>
      <button onClick={(event) => setCounter(100)}> Resetear</button> 

    </>
  );
};
