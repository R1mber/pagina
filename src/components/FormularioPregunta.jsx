import { Fragment, useState, useRef, useEffect} from "react";
import MathView from 'react-math-view';
import { doc, getDoc,updateDoc , setDoc,addDoc,collection } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Formulario(){

    const [pregunta, setPregunta] = useState("");
    const [formula, setFormula] = useState('');

    const [materias, setMaterias] = useState([]);

    const [fPregunta, setFPregunta] = useState([]);
    const [srtrPregunta, setSrtrPregunta] = useState("");

    const [fopcion1, setFopcion1] = useState([]);
    const [srtrOpcion1, setSrtrOpcion1] = useState("");

    const [fopcion2, setFopcion2] = useState([]);
    const [srtrOpcion2, setSrtrOpcion2] = useState("");

    const [fopcion3, setFopcion3] = useState([]);
    const [srtrOpcion3, setSrtrOpcion3] = useState("");

    const [fopcion4, setFopcion4] = useState([]); //opcion correcta
    const [srtrOpcion4, setSrtrOpcion4] = useState("");


    const [respuesta, setRespuesta] = useState('');
    const [materia, setMateria] = useState('');
    const [texto, setTexto] = useState('hola como estas mathViewMTHx=\\frac{-b\\pm\\sqrt{b^2-\\frac{4/a}{2321}}}{2ab}23mathView bien');

    const [textoProcesado, setTextoProcesado] = useState([]);
    
    

    
    const ref = useRef(null);
    
    const actulizarPregunta = (e) => {
        setSrtrPregunta(e.target.value);
        setPregunta(e.target.value);
        setFormula(e.target.value);
    }
    const procesarTexto =()=>{
        let textP=[];
        let contador=0;
        //if exist 'MTH' en texto
        if(texto.includes('MTH')){
            console.log('existe MTHs');
        }else {
            console.log('no existe MTH');
        }
        texto.split('mathView').forEach(element => {
            textP.push(element);
        });
        console.log(textP);
        setTextoProcesado(textP);
    }

    //mostrar el texto procesado
    const mostrarTextoProcesado = () =>{
        //if exist 'MTH' en texto
        return (<p>{ textoProcesado.map((item) => {
            if(item.includes('MTH')){
                console.log('existe MTHssss',item);
                //quitar MTH
                let it=item.replace('MTH','');
                return <MathView value={it} />
            }else {
                console.log('no existe ssssMH',item);
                return item
            }
        })}
        </p>)

    }
    
    const actulizaropcion = (e,opcion) => {
        switch(opcion){
            case 'op1':setSrtrOpcion1(e.target.value); break;
            case 'op2':setSrtrOpcion2(e.target.value); break;
            case 'op3':setSrtrOpcion3(e.target.value); break;
            case 'opC':setSrtrOpcion4(e.target.value); break;
            default: console.log('no existe opcion');
        }
        //setRespuesta(e.target.value);
    }

    const submit2 = () =>{
        //console.log(e);
        setFormula(ref.current?.getValue())
       // console.log('onModeChange', sender, mode)
    }

    const registrarPregunta = async () =>{
        try {
            let cantidad=0;
            let idMateria='';
            if(materia === 0 || materia === '0' || materia === ''){
                console.log("debe seleccionar una materia");
               return
            } 
            
            const materia_ = await getDocs(query(collection(db,'Materias'), where('id', '==',materia)));
            materia_.forEach((doc) => {
                cantidad=doc.data().cantidadPreguntas;
                idMateria=doc.id;
            });
            
            const docData = {
                id:cantidad+1,
                pregunta:srtrPregunta,
                opcionCorrecta:srtrOpcion4,
                opciones: [srtrOpcion1, srtrOpcion2, srtrOpcion3, srtrOpcion4],
                materia: materia
            };
            await updateDoc(doc(db, "Materias",idMateria), {cantidadPreguntas:cantidad+1});
            console.log('data updated');

            await addDoc(collection(db, materia), docData);
            console.log('registro exitoso');

        } catch (error) {
            console.log(error);
        }
    }

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
    
    const submit = (e) =>{
        e.preventDefault();
        console.log(srtrPregunta);
        console.log(srtrOpcion1);
        console.log(srtrOpcion2);
        console.log(srtrOpcion3);
        console.log(srtrOpcion4);
        console.log(materia);

        registrarPregunta();
    }

    useEffect(() => {
        getMaterias();
    }, [])
    return(
        <Fragment>
            <center><h1>Agregar Pregunta</h1> </center>
            {/*<MathView
                value={texto}
                ref={ref}
            />*/}
           {/* <h2>{pregunta} : {texto}
            </h2>
            {respuesta}
            <h3>{formula}</h3>
            <p> pppppppppp <MathView value={formula}/> ffffffffffff</p>

            <button onClick={submit2}>Enviar</button>
            <button onClick={procesarTexto}>procesar</button>
            {mostrarTextoProcesado()}*/}
            <form onSubmit={submit}>
                Seleccione una materia:
                <select className="form-select" onChange={(e)=>setMateria(e.target.value)}>
                    <option value="0">seleccione una materia</option>
                    {materias.map((item) => {
                        return <option key={item.id} value={item.id}>{item.nombre}</option>
                    })}
                </select>
                <div className="mb-0 row g-3">
                    <label htmlFor="pregunta" className="form-label">Pregunta</label>
                    <input onChange={actulizarPregunta} type="text" className="form" id="pregunta"/>
                  {/*  <button className="col-sm-3">agregar fromula matematica</button>*/}

                </div>
                <div className="mb-0">
                    <label htmlFor="opcion1" className="form-label">Opcion 1</label>
                    <input type="text" onChange={(e)=>actulizaropcion(e, 'op1')} className="form-control" id="opcion1"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion2" className="form-label">Opcion 2</label>
                    <input type="text" onChange={(e)=>actulizaropcion(e, 'op2')} className="form-control" id="opcion2"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion3" className="form-label">Opcion 3</label>
                    <input type="text" onChange={(e)=>actulizaropcion(e, 'op3')} className="form-control" id="opcion3"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opciontrue" className="form-label">opcion Correcta</label>
                    <input type="text" onChange={(e)=>actulizaropcion(e, 'opC')} className="form-control" id="opciontrue"/>
                </div>
                <div className="mb-1">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </Fragment>
    );
}
