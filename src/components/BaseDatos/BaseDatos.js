
import amoladoraElectrica from "../../assets/images/amoladoraElectrica.png";
import sierraElectrica from "../../assets/images/sierraElectrica2.png";
import destornilladores from"../../assets/images/destornilladores.png";
import llavesFijasMano from "../../assets/images/llavesfijasmano.png";

export const productosFerreteria =[
    {id:0, titulo: "Amoladora Electrica", precio: "10000 $", foto: amoladoraElectrica, tipo:"electrica",stock:10},
    {id:1, titulo: "Sierra Electrica", precio: "30000 $", foto: sierraElectrica, tipo:"electricas",stock:8},
    {id:2, titulo: "Destornilladores", precio: "6000 $", foto: destornilladores, tipo:"mano",stock:30},
    {id:3, titulo: "LlavesFijas", precio: "80000 $", foto: llavesFijasMano, tipo:"mano", stock:20},
    
]

const promesa =new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(productosFerreteria)
        reject (err =>console.log(err))
    }, 3000)
})
export default promesa;