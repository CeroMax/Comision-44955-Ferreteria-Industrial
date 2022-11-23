
import React from 'react';
import './Item.css';

export const Item = ({data})=>{
    const {foto,titulo,precio} = data
    return(
        <div>
            <div className="vistaProductos" key={titulo}>
                <img src={foto} alt={"foto"}/>
                <h4>{titulo}</h4>
                <p> {precio}</p>
                <button className='botonDescripcion'>Descripcion</button>
            </div>
        </div>
    )
}