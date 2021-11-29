import { Fragment, useEffect, useState } from "react";
import { doc, getDoc,updateDoc , setDoc,addDoc,collection } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function FormularioMateria(){
    const [materias, setMaterias] = useState();
    const [materia, setMateria] = useState("");

    const getMaterias = async () =>{
        try {
            let docs=[];
            const materias = await getDocs(query(collection(db,'Materias')));
            materias.forEach((doc) => {
                docs.push(doc.data());
            });
            setMaterias(docs);
        } catch (error) {
            console.log('Error al obtener materias', error);
        }
    }
    const registrarMateria = async () =>{
        try {
            console.log(materia);
            if(materia === '' || materia === undefined){
                console.log("debe escribir El nombre de la materia");
                return
            }
            let idMateria = materia;
            idMateria = idMateria.replace(/\s/g, '');
            const docData = {
                id:idMateria,
                nombre:materia,
                cantidadPreguntas:0,
            };
            setMateria('');
            await addDoc(collection(db, 'Materias'), docData);
            console.log('registro exitoso');
        } catch (error) {
            console.log(error);
        }
    }

    const submit = (e) =>{
        e.preventDefault();
        registrarMateria();
    }

    useEffect(()=>{
        getMaterias();
    },[]);
    return(
        <Fragment>
            <h1>agregar Materia</h1>
            <form onSubmit={submit} >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Materia</label>
                    <input type="text" value={materia} onChange={(e)=>setMateria(e.target.value)} className="form-control" id="nombre"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {materias && materias.map((item) => {
                return <p key={item.id}>{item.nombre}</p>
            })}
        </Fragment>
    );
}
