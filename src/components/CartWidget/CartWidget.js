
import carrito from '../../assets/fotos/iconoCarrito2.png';
import {Contador} from '../Contador/Contador';

export const CartWidget =() =>{

    
    

    return(
        <div className='EstiloCarro'>
            <img className='Alinear' src={carrito} alt="" />
            <p>carro</p>
        </div>
    )
}