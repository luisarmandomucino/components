import React from "react";

const studentName = "Tania";

// Los datos pasados como props, los recibimos como un objeto en un parametro de la función 


// la desestructuración es obtener las claves de un objeto para hacer asignaciones menos complejas.

//{name, url} = props; 

const Student = ({info, children}) => {
  return (
    <>
      <a href={info.url} target="_blank">
        <h4>{info.name}</h4>
      </a>
      <p> Ex-alumno: {info.isGraduate ? "si " : "no"}</p>
      <p>{children}</p>
    
    </>
  );
};

// la exportación por default podria ser

export default Student;
