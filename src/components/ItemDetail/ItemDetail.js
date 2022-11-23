
import { useState,useEffect } from "react";
import promesa from "../BaseDatos/BaseDatos";
import './ItemDetail.css';



const ItemDetail = () => {

    const [data,setData] = useState({})

    useEffect (() => {
        promesa.then ( response =>{
            setData (response.find (prod => prod.id === 1))
        })

    },[])
    console.log(data);
    return(
        <div className="vistaProducto">
            <img src={data.foto} alt="foto"/>
            <h2>{data.titulo}</h2>
            <h3>{data.precio}</h3>
        </div>
    )

    /*<div>
        <p>ItemDetal</p>
    </div>*/
}
export default ItemDetail;