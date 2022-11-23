import { useState, useEffect } from "react";
import promesa from "../BaseDatos/BaseDatos";
import { Item } from "../Item/Item";
import "./ItemList.css";


const ItemList = () =>{
    const [data, setData]= useState([])

    useEffect (() =>{
        
        promesa.then(data =>{
            setData (data)
        })
    },[])

    return (
        <div style={{display:"flex"}}>
            {data.map(data => (
                <Item key={data.titulo} data={data}/>
            ))}
        </div>
    )
}
export default ItemList;
