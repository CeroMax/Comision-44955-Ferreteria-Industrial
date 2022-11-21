

import React from 'react';
import logoCarro from "../../assets/carroCompra.png";
import "./CarroCompras.css";

export default function CarroCompras() {
  return (
    <div>
        <img className='carroComp' src={logoCarro}  alt="carro"/>
        <p>CarroCompras</p>
    </div>
  )
}
