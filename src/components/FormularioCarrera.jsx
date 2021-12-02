import { Fragment, useEffect, useState } from "react";
import { doc, getDoc,updateDoc , setDoc,addDoc,collection } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";


export default function FormularioCarrera(){
    const [areas, setAreas] = useState([]);
    const [areaSeleccionada, setAreaSeleccionada] = useState('');
    const [materias, setMaterias] = useState([]);
    const [materiasSeleccionadas, setMateriasSeleccionadas] = useState([]);
    const [nombreCarrera, setNombreCarrera] = useState('');
    const [disableButton, setDisableButton] = useState(false);    
    
    const getAreas = async () => {
        try{
            //get areas whith firebase firestore
            let docs=[];
            const data = await getDocs(query(collection(db,'Areas')));
            data.forEach((doc) => {
                docs.push({idArea:doc.id ,...doc.data()});
            });
            setAreas(docs);
            console.log(docs);
        } catch(error){
            console.log('Error al obtener Areas:',error);
        }
    }
    const getMaterias = async () => {
        try{
            //get materias whith firebase firestore
            let docs=[];
            const data = await getDocs(query(collection(db,'Materias')));
            data.forEach((doc) => {
                docs.push({idMateria:doc.id ,...doc.data()});
            });
            setMaterias(docs);
        } catch(error){
            console.log('Error al obtener Materias:',error);
        }
    }

    const setMateriass = (index) => {
        const materia = materias[index];
        if(!materiasSeleccionadas.includes(materia)){
            console.log(materiasSeleccionadas)
            setMateriasSeleccionadas([...materiasSeleccionadas,materia]);
        }else{
            console.log("consola set materia")
        }
    }

    const quitarMateria = (index) => {
        console.log(index,':index');
        const materia = materiasSeleccionadas;
        //quitar un elemento de una lista de elementos con un indice
        let nueva = materia.filter((materia,i) => i !== index);
        setMateriasSeleccionadas(nueva);
    }

    const submit =async (e) => {
        e.preventDefault();
        if(areaSeleccionada === '' || areaSeleccionada === undefined || areaSeleccionada === 0 || areaSeleccionada === '0'){
            alert('Seleccione un area');
            return;
        }
        if(nombreCarrera === '' || nombreCarrera === undefined){
            alert('Ingrese el nombre de la carrera correctamente');
            return;
        }
        if(materiasSeleccionadas.length === 0){
            alert('Seleccione y verifica las materias de la carrera');
            return;
        }

        setDisableButton(true);
        //get carreras whith firebase firestore
        const data = await getDocs(query(collection(db,'Carreras')));
        
        const datosCarrera = {
            id:data.size+1,
            area:areaSeleccionada,
            nombre:nombreCarrera,
            materias: materiasSeleccionadas,
        }
        const adD = await addDoc(collection(db, 'Carreras'), datosCarrera);
        console.log(adD.id);
        //update Areas
        const area = await getDoc(doc(db, "Areas", areaSeleccionada));
        if(area.exists()){
            console.log("area seleccionada",area.data().carreras);
            const Ca=[...area.data().carreras, {idCarrera:adD.id, nombre:nombreCarrera}];

            await updateDoc(doc(db, "Areas",areaSeleccionada), {carreras:Ca});
            console.log('data updated');
        }else{
            alert("Error al de conexion vuelve a intentarlo");
        }
        console.log('registro exitoso');
        setAreaSeleccionada("")
        setMateriasSeleccionadas([])
        setNombreCarrera("")
        setDisableButton(false);
    
    }

    useEffect(()=>{
       getAreas();
       getMaterias();
    },[]);
    
    return(
        <Fragment>
            <h1>agregar nueva Carrera</h1>
            <form onSubmit={submit} >
                <select className="form-select" onChange={(e)=>setAreaSeleccionada(e.target.value)}>
                    <option value="0">seleccione un Area</option>
                    {areas.map((item) => {
                        return <option key={item.idArea} value={item.idArea}>{item.nombre}</option>
                    })}
                </select>
                {areaSeleccionada}

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Carrera</label>
                    <input type="text" value={nombreCarrera} onChange={(e)=>setNombreCarrera(e.target.value)} className="form-control" id="nombre"/>
                    {nombreCarrera}
                </div>

                <select className="form-select" size="4" aria-label="size 3 select example" onChange={(e)=>setMateriass(e.target.value)}>
                    {materias.map((item,index) => {
                        return <option key={item.id} value={index}>{item.nombre}</option>
                    })}
                </select>
                <button type="submit" className="btn btn-primary" disabled={disableButton}>Registrar Materia</button>
            </form>

            <h3>materias Seleccionadas:</h3>
            {materiasSeleccionadas.map((item,index) => {
                return <p key={item.id}>{item.nombre} <button onClick={()=>quitarMateria(index)}>X</button></p>

            })}
        </Fragment>
    );
}
