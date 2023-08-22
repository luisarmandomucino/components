

// funtional component

// los componentes funcionales son funciones de JavaScript ue devuelven JSx. Estas funciones tienen una sintáxis más simple y concisa. 
// React Fragment <></> es un componente especial en React que 
// permite agrupar múltiples elementos en JSX. React Fragment
// no agrega nodos adicionales al DOM, como lo haría si usáramos
// una etiqueta como <div>


export default function Greeting() {
  return (
    <>
      <h1>Felicidades Generation por su 8o Aniversario</h1>
      <h2>Pueden llegar a la pachanga</h2>
    </>
  );
}


// para poder usar esta funcion en otros archivos existen 2 maneras de exportar: export default que se agrega antes de delcarar la función 