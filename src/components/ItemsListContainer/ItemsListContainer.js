import React from 'react';
import { Contador } from '../Contador/Contador';
import "./ItemsListContainer.css";
import { useState } from 'react';


export default function ItemsListContainer(props) {

  const [numeroCarro,setNumeroCarro]=useState()

  const agregar=(productos)=>{
    console.log("agregar al carrito",productos);
    setNumeroCarro(productos);
  }
  console.log('numeroCarro',numeroCarro);

  return (
    <div>
      <h1 className='title'>{props.title}</h1>
      <Contador stock={10} agregarProducto={agregar}/>
    </div>
  )
}
