import React from 'react';
import { Contador } from '../Contador/Contador';
import "./ItemsListContainer.css";



export default function ItemsListContainer(props) {

  const agregar=()=>{
    console.log("funcion agregar")
  }
  return (
    <div>
      <h1 className='title'>{props.title}</h1>
      <Contador stock={10} agregarProducto={agregar}/>
    </div>
  )
}
