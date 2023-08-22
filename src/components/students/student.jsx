import React from "react";

const studentName = "Tania";

// Los datos pasados como props, los recibimos como un objeto en un parametro de la función 


// la desestructuración es obtener las claves de un objeto para hacer asignaciones menos complejas.

//{name, url} = props; 

const Student = ({name, url, isGraduate}) => {
  return (
    <>
      <a href={url} target="_blank">
        <h4>{name}</h4>
      </a>
      <p> Ex-alumno: {isGraduate.toString()}</p>
    
    </>
  );
};

// la exportación por default podria ser

export default Student;
