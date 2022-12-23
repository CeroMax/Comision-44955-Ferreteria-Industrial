
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import "./CartContent.css";

import React from 'react'


const CartElement = () => {
    const {cont1} = useContext(dataContext);
    const{cart}= useContext(dataContext);
    return cart.map((item) => {
        
        return(
            <div className='cartContent' key={item.id}>
                <img className='margenes' src={item.foto} alt="imagen"/>
                <h4 className='margenes'>{item.titulo}</h4>
                <h5 className='margenes'>Precio: $ {item.precio}</h5>
                <h4 className='margenes'>Detalle: </h4>
                <h4 className='margenes'>{item.detalle}</h4>
                <h4 className='margenes'>Cantidad: {cont1}</h4>
                
            </div>
        )

    })

 
}

export default CartElement