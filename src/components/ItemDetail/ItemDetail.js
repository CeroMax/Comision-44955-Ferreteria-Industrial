
import { useState,useEffect } from "react";
import promesa from "../BaseDatos/BaseDatos";
import { Item } from "../Item/Item";
import './ItemDetail.css';



const ItemDetail = () => {

    const [data,setData] = useState({})
    const[loading,setLoading]= useState(true)

    useEffect (() => {
        promesa.then ( response =>{
            setData (response.find (prod => prod.id === 0))
            setLoading(false)
        })

    },[])
    console.log(data);
    return(
        <>
            {
                loading ? <h2>Cargando....</h2>:
                 
                    <div  style={{display:"flex"}}>
                        <Item key={data.titulo} data={data} />
                    </div>
            }
        </>
        
    )
}
export default ItemDetail;