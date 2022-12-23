
import './ItemDetail.css';
import { Contador } from '../Contador/Contador';
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

export const ItemDetail = ({item})=>{

    const{cart,setCart,cont1,setCont1}= useContext(dataContext);

    const agregar=(cont,)=>{
        
        console.log(item)
        setCart([...cart,item]);
        /*console.log("carrito",cart);*/
        
        setCont1([cont]);
        
        };
        console.log("carrito",cart);
        console.log('cantidad a agregar',[cont1]);
        

    
    return(
        <div className='detail-container'>
            {/*<p style={{width: "100%"}}></p>*/}
            <div className='img-container'>
                <img src={item.foto} alt={item.titulo}/>
            </div>
            <div className='img-container'>
                <h4>{item.titulo}</h4>
                <h5> {item.precio}</h5>
                <h4>Detalle</h4>
                <h4>{item.detalle}</h4>
                <h4>Cantidad: {cont1}</h4>
                
                <Contador stock={item.stock} agregarProducto={agregar} />
            </div>
        </div>
    )

}