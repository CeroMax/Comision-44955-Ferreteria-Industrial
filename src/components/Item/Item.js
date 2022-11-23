
import React from 'react';
import './Item.css';

export const Item = ({data})=>{
    //const {foto,titulo,precio} = data
    return(
        
            <div className="vistaProductos" key={data.id} id={data.id}>
                <img src={data.foto} alt={"foto"}/>
                <h4>{data.titulo}</h4>
                <p> {data.precio}</p>
                <button className='botonDescripcion'>Ver detalle</button>
            </div>
        
    )
}