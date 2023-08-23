// import React from 'react' no se hace la importación porque el primer componente ya está exportando

import Student from "../students/student";
import studentsinfo from "../students/students-info";

//Las props (propiedades) son un mecanismo para pasar datos de un componente padre a un componente hijo. Las props unidireccionales.

export default function Generation() {
  return (
    <>
      <h2>Generation</h2>
      <p>
        En <em>Generation</em> aprendí con pasión, Java Dev Jr. fue mi canción.
        Bootcamp brillante, conocimientos al alza,
        <strong>Generation MX</strong>Generation MX, ¡mi ruta en casa!
      </p>
      <h4 id="subtitle">Participantes</h4>
      {studentsinfo.map(studentsinfo => 
              <Student info={studentsinfo}>Gen Ch 30 </Student>)}
    </>
  );
}
