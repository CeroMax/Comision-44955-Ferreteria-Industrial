import { createContext, useState,useEffect } from "react";
import { productosFerreteria } from "../baseDatos/baseDatos";


export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data, setData] =useState([]);
    const [cart, setCart] =useState([]);

    const promesa = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(productosFerreteria);
        }, 1000);
    });

    useEffect(() =>{
        promesa.then(res=> setData (res.data)); 
    },)

    return (
        <dataContext.Provider value={{data}}>
            {children}
        </dataContext.Provider>
    )
};
export default DataProvider;