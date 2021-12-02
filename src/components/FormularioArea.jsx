import { Fragment, useEffect, useState } from "react";
import { doc, getDoc,updateDoc , setDoc,addDoc,collection } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function FormularioArea(){
    const [area, setArea] = useState("");
    const [areas, setAreas] = useState([]);
    const submit = async(e) => {
        e.preventDefault();
        console.log(area);
        if(area!=="" || area!==null || area!==undefined){            
            
            const datosCarrera = {
                id:2,
                nombre:area,
            }
            await addDoc(collection(db, 'Areas'), datosCarrera);
            alert("Se agrego correctamente");

        }
    }
    
    useEffect(()=>{
        console.log(area);
    },[area]);
    
    return(
        <Fragment>
            <h1>agregar Area</h1>
            <form onSubmit={submit} >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre de Area</label>
                    <input type="text" value={area} onChange={(e)=>setArea(e.target.value)} className="form-control" id="nombre"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {areas && areas.map((item) => {
                return <p key={item.id}>{item.nombre}</p>
            })
            }
        </Fragment>
    );
}
