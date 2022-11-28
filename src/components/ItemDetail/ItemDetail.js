
import './ItemDetail.css';

export const ItemDetail = ({item})=>{
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
            </div>
        </div>
    )
}