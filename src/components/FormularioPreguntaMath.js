import { Fragment, useState, useRef, useEffect} from "react";
import MathView from 'react-math-view';
import { doc, getDoc,updateDoc , setDoc,addDoc,collection } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function FormularioMath(){

    const [disableButton, setDisableButton] = useState(false);
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

    const [preguntaPreparada, setPreguntaPreparada] = useState();
    const [opcion1Preparada, setOpcion1Preparada] = useState();
    const [opcion2Preparada, setOpcion2Preparada] = useState();
    const [opcion3Preparada, setOpcion3Preparada] = useState();
    const [opcion4Preparada, setOpcion4Preparada] = useState();

    const [respuesta, setRespuesta] = useState('');
    const [materia, setMateria] = useState('');
    const [texto, setTexto] = useState('hola como estas mathViewMTHx=\\frac{-b\\pm\\sqrt{b^2-\\frac{4/a}{2321}}}{2ab}23mathView bien');

    const [textoProcesado, setTextoProcesado] = useState([]);
    
    

    
    const ref = useRef(null);
    
    const actulizarPregunta = (e) => {
        setSrtrPregunta(e.target.value);
        setPregunta(e.target.value);
        //setFormula(e.target.value);
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
        if(opcion!=='cls'){
            switch(opcion){
                case 'op1':setSrtrOpcion1(e.target.value); break;
                case 'op2':setSrtrOpcion2(e.target.value); break;
                case 'op3':setSrtrOpcion3(e.target.value); break;
                case 'opC':setSrtrOpcion4(e.target.value); break;
                default: console.log('no existe opcion');
            }
        }else{
            setSrtrOpcion1(""); 
            setSrtrOpcion2(""); 
            setSrtrOpcion3(""); 
            setSrtrOpcion4(""); 
            setSrtrPregunta("");

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
            setDisableButton(true);
            let cantidad=0;
            let idMateria='';

            
            const materia_ = await getDocs(query(collection(db,'Materias'), where('id', '==',materia)));
            materia_.forEach((doc) => {
                cantidad=doc.data().cantidadPreguntas;
                idMateria=doc.id;
            });
            
            const docData = {
                id:cantidad+1,
                pregunta:preguntaPreparada,
                opcionCorrecta:opcion4Preparada,
                opciones: [opcion1Preparada, opcion2Preparada, opcion3Preparada, opcion4Preparada],
                materia: materia
            };
            await updateDoc(doc(db, "Materias",idMateria), {cantidadPreguntas:cantidad+1});
            console.log('data updated');

            await addDoc(collection(db, materia), docData);
            
            actulizaropcion('cls','cls');
            setDisableButton(false);
            alert('Se guardaron los datos correctamente');
        } catch (error) {
            console.log(error);
            alert('Ocurrio un error al guardar los datos');
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
        if(materia === 0 || materia === '0' || materia === ''){
            alert("debe seleccionar una materia");
           return
        } 
        if(srtrPregunta === '' || srtrPregunta === null || srtrPregunta === undefined){
            alert('debe ingresar una pregunta');
            return
        }
        if(srtrOpcion1 === '' || srtrOpcion1 === null || srtrOpcion1 === undefined){
            alert('debe ingresar la opcion 1');
            return
        }
        if(srtrOpcion2 === '' || srtrOpcion2 === null || srtrOpcion2 === undefined){
            alert('debe ingresar la opcion 2');
            return
        }
        if(srtrOpcion3 === '' || srtrOpcion3 === null || srtrOpcion3 === undefined){
            alert('debe ingresar la opcion 3');
            return
        }
        if(srtrOpcion4 === '' || srtrOpcion4 === null || srtrOpcion4 === undefined){
            alert('debe ingresar la opcion correcta');
            return
        }

        registrarPregunta();
    }
    const pressAddForm = (input) =>{
        if(input === 'p'){
            //setFormula(ref.current?.getValue());
            let lP = fPregunta.length;
            setFPregunta([...fPregunta,ref.current?.getValue()]);
            setSrtrPregunta(`${srtrPregunta}fMathfMtN${lP}fMath`);
            console.log('presionaste pregunta');
            //srtrPregunta
            //fPregunta
        }
        if(input === 'op1'){
            let lop1 = fopcion1.length;
            setFopcion1([...fopcion1,ref.current?.getValue()]);
            setSrtrOpcion1(`${srtrOpcion1}fMathfMtN${lop1}fMath`);
            console.log('presionaste opcion 1');
        }
        if(input === 'op2'){
            let lop2 = fopcion2.length;
            setFopcion2([...fopcion2,ref.current?.getValue()]);
            setSrtrOpcion2(`${srtrOpcion2}fMathfMtN${lop2}fMath`);
            console.log('presionaste opcion 2');
        }
        if(input === 'op3'){
            let lop3 = fopcion3.length;
            setFopcion3([...fopcion3,ref.current?.getValue()]);
            setSrtrOpcion3(`${srtrOpcion3}fMathfMtN${lop3}fMath`);
            console.log('presionaste opcion 3');
        }
        if(input === 'opC'){
            let lopC = fopcion4.length;
            setFopcion4([...fopcion4,ref.current?.getValue()]);
            setSrtrOpcion4(`${srtrOpcion4}fMathfMtN${lopC}fMath`);
            console.log('presionaste opcion correcta');
        }
    }

    const prepararTexto = (t) =>{
        if(t==='p'){
            let atp=[]
            srtrPregunta.split('fMath').forEach(element => {
                atp.push(element);
            });
            let textoPr='';
            atp.map((item,index) => {
                if(item.includes('fMtN')){
                    let it=item.replace('fMtN','');
                    textoPr=textoPr+fPregunta[parseInt(it)];
                }else{
                    textoPr+=item;
                }
            });
            return textoPr;
        }
        if(t==='op1'){
            let atp=[]
            srtrOpcion1.split('fMath').forEach(element => {
                atp.push(element);
            });
            let textoPr='';
            atp.map((item,index) => {
                if(item.includes('fMtN')){
                    let it=item.replace('fMtN','');
                    textoPr=textoPr+fopcion1[parseInt(it)];
                }else{
                    textoPr+=item;
                }
            });
            return textoPr;
        }
        if(t==='op2'){
            let atp=[]
            srtrOpcion2.split('fMath').forEach(element => {
                atp.push(element);
            });
            let textoPr='';
            atp.map((item,index) => {
                if(item.includes('fMtN')){
                    let it=item.replace('fMtN','');
                    textoPr=textoPr+fopcion2[parseInt(it)];
                }else{
                    textoPr+=item;
                }
            });
            return textoPr;
        }
        if(t==='op3'){
            let atp=[]
            srtrOpcion3.split('fMath').forEach(element => {
                atp.push(element);
            });
            let textoPr='';
            atp.map((item,index) => {
                if(item.includes('fMtN')){
                    let it=item.replace('fMtN','');
                    textoPr=textoPr+fopcion3[parseInt(it)];
                }else{
                    textoPr+=item;
                }
            });
            return textoPr;
        }
        if(t==='op4'){
            let atp=[]
            srtrOpcion4.split('fMath').forEach(element => {
                atp.push(element);
            });
            let textoPr='';
            atp.map((item,index) => {
                if(item.includes('fMtN')){
                    let it=item.replace('fMtN','');
                    textoPr=textoPr+fopcion4[parseInt(it)];
                }else{
                    textoPr+=item;
                }
            });
            return textoPr;
        }
    }

    useEffect(() => {
        getMaterias();
    }, [])

    useEffect(() => {
        const tPrep = prepararTexto('p');
        setPreguntaPreparada(tPrep);
    }, [srtrPregunta])

    useEffect(() => {
        const tPrep = prepararTexto('op1');
        setOpcion1Preparada(tPrep);
    }, [srtrOpcion1])

    useEffect(() => {
        const tPrep = prepararTexto('op2');
        setOpcion2Preparada(tPrep);
    }, [srtrOpcion2])

    useEffect(() => {
        const tPrep = prepararTexto('op3');
        setOpcion3Preparada(tPrep);
    }, [srtrOpcion3])

    useEffect(() => {
        const tPrep = prepararTexto('op4');
        setOpcion4Preparada(tPrep);
    }, [srtrOpcion4])

    return(
        <Fragment>
            <center><h1>Agregar Pregunta Math</h1> </center>
            {/*<MathView
                value={texto}
                ref={ref}
            />*/}
           {/* <h2>{pregunta} : {texto}
            </h2>
            {respuesta}
            
            <p> pppppppppp <MathView value={formula}/> ffffffffffff</p>

            
            <button onClick={procesarTexto}>procesar</button>
            {mostrarTextoProcesado()}*/}
            {//<button onClick={submit2}>Enviar</button>}
            }
            <MathView
                ref={ref}
            />
            <h3>{formula}</h3>
            <form onSubmit={submit}>
                <div className="form-floating">
                    <select className="form-select" onChange={(e)=>setMateria(e.target.value)} id="floatingSelect" aria-label="Floating label select example">
                        <option value="0">seleccione una materia</option>
                        {materias.map((item) => {
                        return <option key={item.id} value={item.id}>{item.nombre}</option>
                        })}
                    </select>
                    <label htmlFor="floatingSelect">Seleccione una materia</label>
                </div>
                <br/>
                <div className="form-floating">
                    <textarea value={srtrPregunta} onChange={actulizarPregunta} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}}></textarea>
                    <label htmlFor="floatingTextarea2">Pregunta</label>
                    <button type="button" onClick={()=>pressAddForm('p')} className="sm">add form preg</button>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion1" className="form-label">Opcion 1</label>
                    <input type="text" value={srtrOpcion1} onChange={(e)=>actulizaropcion(e, 'op1')} className="form-control" id="opcion1"/>
                    <button type="button" onClick={()=>pressAddForm('op1')} className="sm">add form1</button>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion2" className="form-label">Opcion 2</label>
                    <input type="text" value={srtrOpcion2} onChange={(e)=>actulizaropcion(e, 'op2')} className="form-control" id="opcion2"/>
                    <button type="button" onClick={()=>pressAddForm('op2')} className="sm">add from2</button>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion3" className="form-label">Opcion 3</label>
                    <input type="text" value={srtrOpcion3} onChange={(e)=>actulizaropcion(e, 'op3')} className="form-control" id="opcion3"/>
                    <button type="button" onClick={()=>pressAddForm('op3')} className="sm">add form 3</button>
                </div>
                <div className="mb-0">
                    <label htmlFor="opciontrue" className="form-label">Opcion Correcta</label>
                    <input type="text" value={srtrOpcion4} onChange={(e)=>actulizaropcion(e, 'opC')} className="form-control" id="opciontrue"/>
                    <button type="button" onClick={()=>pressAddForm('opC')} className="sm">add form 4</button>
                </div>

            </form>
            <br/>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={disableButton}>
                Guardar pregunta
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Verifique sus datos</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div class="alert alert-success" role="alert">
                        Materia: {materia}
                    </div>
                    
                    <div class="alert alert-primary" role="alert">
                    Pregunta: {pregunta}<br/>
                    PreguntaPreparada: {preguntaPreparada}
                    </div>
                    <div class="alert alert-success" role="alert">
                    Opcion 1 : {srtrOpcion1}<br/>
                    Opcion 1 Preparada: {opcion1Preparada}
                    </div>
                    <div class="alert alert-success" role="alert">
                    Opcion 2 : {srtrOpcion2}<br/>
                    Opcion 2 Preparada: {opcion2Preparada}
                    </div>
                    <div class="alert alert-success" role="alert">
                    Opcion 3 : {srtrOpcion3}<br/>
                    Opcion 3 Preparada: {opcion3Preparada}

                    </div>

                    <div class="alert alert-info" role="alert">
                    Opcion Correcta : {srtrOpcion4}<br/>
                    Opcion Correcta Preparada: {opcion4Preparada}
                    </div>                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={submit} data-bs-dismiss="modal">Guardar Pregunta</button>
                </div>
                </div>
            </div>
            </div>

        </Fragment>
    );
}
