import React, { useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import db from '../../utils/fireBase'; 

export const PaginaFirebase = () => {

    useEffect(() =>{
        const getData = async() =>{

            const query = collection(db,"items");
            const response = await getDocs(query);
            const docs = response.docs;
            //console.log("docs info", docs[0].data());
            //console.log("docs info", docs[0].id);
            const data = docs.map(doc=>{return{...doc.data(), id:doc.id}})

        }
        getData();

    },[]);


  return (
    <div>PaginaFirebase</div>
  )
}
