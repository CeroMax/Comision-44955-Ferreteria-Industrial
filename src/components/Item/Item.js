
import './Item.css';

export const Item = ({Item})=>{
    return(
        <div className="vistaProductos">
            <img src={Item.foto} alt={Item.titulo}/>
            <h4>{Item.titulo}</h4>
            <p> {Item.precio}</p>
            <button className='botonDescripcion'>Descripcion</button>
        </div>
    )
}