import { useState, useEffect } from "react";
import promesa from "../BaseDatos/BaseDatos";
import { Item } from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const ItemList = () =>{
    const {tipoProducto}= useParams();
    
    

    const [data, setData]= useState([]);
    const[loading,setLoading]= useState(true);

    useEffect (() =>{
        
        promesa.then(data =>{

        if (tipoProducto === undefined){
            setData (data)
            setLoading(false)
        }else {

            const nuevaLista= data.filter(item => item.categoria === tipoProducto)
            setData (nuevaLista)
            setLoading(false)
            }
        })
    },[tipoProducto])

    return (
        <>
            {
                loading ? <h2>Cargando....</h2>:
                    <div style={{display:"flex"}}>
                        {
                            data.map(data => (
                                <Link key={data.id} to= {`/item/${data.id}`}> 
                                    <Item  data={data}/> 
                                </Link>
                        ))
                        }
                    </div>
            }
        </>
    )
}
export default ItemList;
