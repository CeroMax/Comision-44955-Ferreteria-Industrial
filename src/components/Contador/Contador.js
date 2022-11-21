
import { useState } from "react";
import "./contador.css";

//con props
//export const Contador = (props) =>{
    //const [Contador, setContador] = useState(0)
    //const Incrementar = () =>{
        //if (Contador < props.stock) {
            //setContador (Contador + 1)
        //}
        //setContador (Contador + 1)
    //}

    //contador con variable stock desestructurar
export const Contador = ({stock, agregarProducto}) =>{

    const [Contador, setContador] = useState(0)
    const Incrementar = () =>{
        if (Contador < stock) {
                setContador (Contador + 1)
            }
        }    
            
    const Quitar = () =>{
        if (Contador> 0){
            setContador(Contador - 1)
        }
    }

    return(
        <div className='contador'>
            <button onClick={Incrementar}> Agregar</button>
            <div className="divContador"><p className="pContador">{Contador}</p></div>
            <button onClick={Quitar}>Quitar</button>
            <button onClick={agregarProducto}></button>
        </div> 
    )
}