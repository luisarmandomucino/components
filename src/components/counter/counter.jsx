export const Counter = () => {
  console.log("Estoy dentro del componente Counter");

  let counterValue = 100;

  const handleIncrement = () => {
    console.log("Estoy en fnc increment");
    counterValue++;
    console.log ("Contador" + counterValue)
  };

  const handleDecrement = () => {
    console.log("Estoy en la fnc decrement");
    counterValue--;
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
      <button onClick={()=>counterValue = 100 }> Resetear</button>

    </>
  );
};
