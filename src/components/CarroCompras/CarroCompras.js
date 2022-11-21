
import React, { useState } from 'react';
import logoCarro from "../../assets/carroCompra.png";
import "./CarroCompras.css";
import ItemsListContainer from '../ItemsListContainer/ItemsListContainer';


export default function CarroCompras() {
  
  return (
    <div className='carro'>
        <img className='carroComp' src={logoCarro}  alt="carro"/>
        <p className='parrafo'>CarroCompras</p>
    </div>
  )
}
