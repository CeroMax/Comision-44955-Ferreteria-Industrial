import React from 'react';
import { useState } from 'react';
import "./Contador.css";


export const Contador = ({stock, agregarProducto}) =>{
    
  
  const [contador, setContador] = useState(0);
  const Incrementar = () =>{
      if (contador < stock) {
              setContador (contador + 1)
          }
      }    
          
  const Quitar = () =>{
      if (contador> 0){
          setContador(contador - 1)
      }
  }

  
console.log(agregarProducto);
console.log('pruebaContador',contador);
  return(
      <div className='contador'>
          <button className='button' onClick={Incrementar}> + </button>
          <div className="divContador"><p className="pContador">{contador}</p></div>
          <button className='button' onClick={Quitar}> - </button>
          <button onClick={()=>(agregarProducto(contador))}>agregar al carrito</button>
          
      </div> 
  )
 
}