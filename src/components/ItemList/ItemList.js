import { useState, useEffect } from "react";
import promesa from "../BaseDatos/BaseDatos";
import { Item } from "../Item/Item";
import "./ItemList.css";


const ItemList = () =>{
    const [data, setData]= useState([])
    const[loading,setLoading]= useState(true)

    useEffect (() =>{
        
        promesa.then(data =>{
            setData (data)
            setLoading(false)
        })
    },[])

    return (
        <>
            {
                loading ? <h2>Cargando....</h2>:
                    <div style={{display:"flex"}}>
                        {data.map(data => (
                        <Item key={data.id} data={data}/> 
                        ))}
                    </div>
            }
        </>
    )
}
export default ItemList;
