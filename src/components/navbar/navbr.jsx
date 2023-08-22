// snippet traido como rafc

import React from 'react'

// const pages = ["home", "Users", "About", "Register"]
const pages = [
    {name: "home", url: "/"},
    {name: "Users", url: "/"},
    {name: "Counter", url: "/"},
    {name: "About", url: "/"},
    {name: "Register", url: "/"}, 
];

// cuando se renderiza una lista de elementos es importante proporcionar una prop "key" a cada elemento de la lista, esto permite a react reailzar una actualización eficiente y optimizada de la interfaz de usuario cuando cambia el contenido  de la lista. 

export const Navbr = () => {
  return (
    <>
        <h4>CH30</h4>
        <ul>
            { pages.map( pages => <li key={pages.name}  >{pages.name}</li>   )}
        </ul>
        
    </>
  )
}

const Footer = ()=> { 
    return (
        <>
            <p>Derechos no reservados 2023. </p>
            <p>Lo que está en méxico pertenece a los mexicanos.</p>
        </>
    )
}

export {Footer};
