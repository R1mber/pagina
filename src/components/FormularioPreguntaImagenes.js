import { Fragment, useState, useRef, useEffect,Image} from "react";
import MathView from 'react-math-view';
import { doc, getDoc,updateDoc , setDoc,addDoc,collection } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db ,storage} from "../config/firebase";
import {getDownloadURL, ref as referencia, uploadBytesResumable} from "@firebase/storage";


export default function FormularioPreguntaImagenes(){

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

    const [url , setUrl] = useState("");
    const [respuesta, setRespuesta] = useState('');
    const [materia, setMateria] = useState('');
    const [texto, setTexto] = useState('hola como estas mathViewMTHx=\\frac{-b\\pm\\sqrt{b^2-\\frac{4/a}{2321}}}{2ab}23mathView bien');

    const [textoProcesado, setTextoProcesado] = useState([]);
    
    const [imagen, setImagen] = useState('');
    const [progreso, setProgreso] = useState(0);
    const [concatena, setConcatena] = useState('');
    
    const ref = useRef(null);
    
    const actulizarPregunta = (e) => {
        setSrtrPregunta(e.target.value);
        setPregunta(e.target.value);
        setFormula(e.target.value);
    }

    const concatenarUrl = (url,opc) => {
        switch(opc){
            case 0:setPregunta(pregunta + 'imgcontent'+url  + 'IMGAQUIimgcontent');break;
            case 1:setSrtrOpcion1(srtrOpcion1 + 'imgcontent'+url  + 'IMGAQUIimgcontent');break;
            case 2:setSrtrOpcion2(srtrOpcion2 + 'imgcontent'+url  + 'IMGAQUIimgcontent');break;
            case 3:setSrtrOpcion3(srtrOpcion3 + 'imgcontent'+url  + 'IMGAQUIimgcontent');break;
            case 4:setSrtrOpcion4(srtrOpcion4 + 'imgcontent'+url  + 'IMGAQUIimgcontent');break;
            default:break;
        }
        

    }
    const concatenarTexto = (texto,opc) => {
        switch(opc){
            case 0:{setPregunta(pregunta + texto);setConcatena('');};break;
            case 1:{setSrtrOpcion1(srtrOpcion1 + texto);setFopcion1('')};break;
            case 2:{setSrtrOpcion2(srtrOpcion2 + texto);setFopcion2('')};break;
            case 3:{setSrtrOpcion3(srtrOpcion3 + texto);setFopcion3('')};break;
            case 4:{setSrtrOpcion4(srtrOpcion4 + texto);setFopcion4('')};break;
            default:break;
        }
        
    }
    const actulizarContena = (e,opc) => {
        switch(opc){
            case 0:{setConcatena(e.target.value);};break;
            case 1:{setFopcion1(e.target.value);};break;
            case 2:{setFopcion2(e.target.value);};break;
            case 3:{setFopcion3(e.target.value);};break;
            case 4:{setFopcion4(e.target.value);};break;
            default:break;
        }
    }

    //subir imagen a firebase storage
    const subirImagen = (img ,opc) => {
        if(!img)return;
        const storeRef = referencia(storage,`imagenes/${img.name}`);
        const UploadTask = uploadBytesResumable(storeRef, img);
        UploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgreso(progress);

            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);

                    concatenarUrl(downloadURL,opc)
                    alert("Imagen subida correctamente");
                });
            }

        );

    }

    const borrarText = (opc) => {
        switch(opc){
            case 0:{setPregunta('');setConcatena('');};break;
            case 1:{setSrtrOpcion1('');setFopcion1('')};break;
            case 2:{setSrtrOpcion2('');setFopcion2('')};break;
            case 3:{setSrtrOpcion3('');setFopcion3('')};break;
            case 4:{setSrtrOpcion4('');setFopcion4('')};break;
            default:break;
        }
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
            setPregunta('');
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
                pregunta:pregunta,
                opcionCorrecta:srtrOpcion4,
                opciones: [srtrOpcion1, srtrOpcion2, srtrOpcion3, srtrOpcion4],
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
    //funcion para 
    
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
        if(pregunta === '' || pregunta === null || pregunta === undefined){
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

    useEffect(() => {
        getMaterias();
    }, [])
    return(
        <Fragment>
            <center><h1>Agregar Pregunta con imagenes</h1> </center>
            <div  className="block-example border border-dark rounded"  style={{ padding:8}}>
                <h5>Armado de pregunta <button className="btn btn-primary" onClick={()=>{borrarText(0)}}>borrar Texto</button> </h5>
                <p style={{textAlign:'center',backgroundColor:'lightblue',borderRadius:8}}>{pregunta}</p>
                <div style={{display:"flex" , flexDirection:'row', justifyContent:"space-around"}}>
                    <div  className="block-example border border-dark" style={{backgroundColor:'lightgray',padding:24,borderRadius:8}}>
                        <center>
                            <h3>Agregar Imagen</h3>
                            <input type="file"  onChange={(e)=>{setImagen(e.target.files[0]);alert('se cargo imagen')}}/>
                            <button  onClick={()=>subirImagen(imagen,0)}>Upload</button>
                            <h4>Progreso {progreso}%</h4>
                        </center>
                    </div>
                    <div  className="block-example border border-dark"  style={{backgroundColor:'lightgray',padding:24,borderRadius:8,minWidth:'45%'}}>
                        <center>
                        <h3>Agregar texto</h3>
                        <textarea value={concatena} onChange={(e)=>{actulizarContena(e,0)}} className="form-control" placeholder="Parte texto de pregunta" id="floatingTextarea2" style={{height: 100}}></textarea>
                            <button className="btn btn-primary my-3" onClick={()=>{concatenarTexto(concatena,0)}}>Agregar a Pregunta</button>
                        </center>
                    </div>
                </div>
            </div>

            <div  className="block-example border border-dark rounded mt-3"  style={{ padding:8}}>
                <h5>Armado de Opcion 1 <button className="btn btn-primary" onClick={()=>{borrarText(1)}}>borrar Texto</button> </h5>
                <p style={{textAlign:'center',backgroundColor:'lightblue',borderRadius:8}}>{srtrOpcion1}</p>
                <div style={{display:"flex" , flexDirection:'row', justifyContent:"space-around"}}>
                    <div  className="block-example border border-dark" style={{backgroundColor:'lightgray',padding:24,borderRadius:8}}>
                        <center>
                            <h3>Agregar Imagen</h3>
                            <input type="file"  onChange={(e)=>{setImagen(e.target.files[0]);}}/>
                            <button  onClick={()=>subirImagen(imagen,1)}>Upload</button>
                            <h4>Progreso {progreso}%</h4>
                        </center>
                    </div>
                    <div  className="block-example border border-dark"  style={{backgroundColor:'lightgray',padding:24,borderRadius:8,minWidth:'45%'}}>
                        <center>
                        <h3>Agregar texto</h3>
                        <textarea value={fopcion1} onChange={(e)=>{actulizarContena(e,1)}} className="form-control" placeholder="Parte texto de pregunta" id="floatingTextarea2" style={{height: 100}}></textarea>
                            <button className="btn btn-primary my-3" onClick={()=>{concatenarTexto(fopcion1,1)}}>Agregar a Pregunta</button>
                        </center>
                    </div>
                </div>
            </div>
            
            <div  className="block-example border border-dark rounded mt-3"  style={{ padding:8}}>
                <h5>Armado de Opcion 2 <button className="btn btn-primary" onClick={()=>{borrarText(2)}}>borrar Texto</button> </h5>
                <p style={{textAlign:'center',backgroundColor:'lightblue',borderRadius:8}}>{srtrOpcion2}</p>
                <div style={{display:"flex" , flexDirection:'row', justifyContent:"space-around"}}>
                    <div  className="block-example border border-dark" style={{backgroundColor:'lightgray',padding:24,borderRadius:8}}>
                        <center>
                            <h3>Agregar Imagen</h3>
                            <input type="file"  onChange={(e)=>{setImagen(e.target.files[0]);alert('se cargo imagen')}}/>
                            <button  onClick={()=>subirImagen(imagen,2)}>Upload</button>
                            <h4>Progreso {progreso}%</h4>
                        </center>
                    </div>
                    <div  className="block-example border border-dark"  style={{backgroundColor:'lightgray',padding:24,borderRadius:8,minWidth:'45%'}}>
                        <center>
                        <h3>Agregar texto</h3>
                        <textarea value={fopcion2} onChange={(e)=>{actulizarContena(e,2)}} className="form-control" placeholder="Parte texto de pregunta" id="floatingTextarea2" style={{height: 100}}></textarea>
                            <button className="btn btn-primary my-3" onClick={()=>{concatenarTexto(fopcion2,2)}}>Agregar a Pregunta</button>
                        </center>
                    </div>
                </div>
            </div>

            <div  className="block-example border border-dark rounded mt-3"  style={{ padding:8}}>
                <h5>Armado de Opcion 3 <button className="btn btn-primary" onClick={()=>{borrarText(3)}}>borrar Texto</button> </h5>
                <p style={{textAlign:'center',backgroundColor:'lightblue',borderRadius:8}}>{srtrOpcion3}</p>
                <div style={{display:"flex" , flexDirection:'row', justifyContent:"space-around"}}>
                    <div  className="block-example border border-dark" style={{backgroundColor:'lightgray',padding:24,borderRadius:8}}>
                        <center>
                            <h3>Agregar Imagen</h3>
                            <input type="file"  onChange={(e)=>{setImagen(e.target.files[0]);alert('se cargo imagen')}}/>
                            <button  onClick={()=>subirImagen(imagen,3)}>Upload</button>
                            <h4>Progreso {progreso}%</h4>
                        </center>
                    </div>
                    <div  className="block-example border border-dark"  style={{backgroundColor:'lightgray',padding:24,borderRadius:8,minWidth:'45%'}}>
                        <center>
                        <h3>Agregar texto</h3>
                        <textarea value={fopcion3} onChange={(e)=>{actulizarContena(e,3)}} className="form-control" placeholder="Parte texto de pregunta" id="floatingTextarea2" style={{height: 100}}></textarea>
                            <button className="btn btn-primary my-3" onClick={()=>{concatenarTexto(fopcion3,3)}}>Agregar a Pregunta</button>
                        </center>
                    </div>
                </div>
            </div>

            <div  className="block-example border border-dark rounded mt-3"  style={{ padding:8}}>
                <h5>Armado de Opcion correcta <button className="btn btn-primary" onClick={()=>{borrarText(4)}}>borrar Texto</button> </h5>
                <p style={{textAlign:'center',backgroundColor:'lightblue',borderRadius:8}}>{srtrOpcion4}</p>
                <div style={{display:"flex" , flexDirection:'row', justifyContent:"space-around"}}>
                    <div  className="block-example border border-dark" style={{backgroundColor:'lightgray',padding:24,borderRadius:8}}>
                        <center>
                            <h3>Agregar Imagen</h3>
                            <input type="file"  onChange={(e)=>{setImagen(e.target.files[0]);alert('se cargo imagen')}}/>
                            <button  onClick={()=>subirImagen(imagen,4)}>Upload</button>
                            <h4>Progreso {progreso}%</h4>
                        </center>
                    </div>
                    <div  className="block-example border border-dark"  style={{backgroundColor:'lightgray',padding:24,borderRadius:8,minWidth:'45%'}}>
                        <center>
                        <h3>Agregar texto</h3>
                        <textarea value={fopcion4} onChange={(e)=>{actulizarContena(e,4)}} className="form-control" placeholder="Parte texto de pregunta" id="floatingTextarea2" style={{height: 100}}></textarea>
                            <button className="btn btn-primary my-3" onClick={()=>{concatenarTexto(fopcion4,4)}}>Agregar a Pregunta</button>
                        </center>
                    </div>
                </div>
            </div>

            <form onSubmit={submit}>
                <h3 className="mt-5">Vista previa de pregunta</h3>
                <div className="form-floating  mt-5">
                
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
                    <textarea disabled='true' value={pregunta} onChange={actulizarPregunta} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}}></textarea>
                    {/*  <button className="col-sm-3">agregar fromula matematica</button>*/}
                    <label htmlFor="floatingTextarea2">Pregunta</label>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion1" className="form-label">Opcion 1</label>
                    <textarea disabled="true" type="text" value={srtrOpcion1} onChange={(e)=>actulizaropcion(e, 'op1')} className="form-control" id="opcion1"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion2" className="form-label">Opcion 2</label>
                    <textarea disabled="true" type="text" value={srtrOpcion2} onChange={(e)=>actulizaropcion(e, 'op2')} className="form-control" id="opcion2"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion3" className="form-label">Opcion 3</label>
                    <textarea disabled="true" type="text" value={srtrOpcion3} onChange={(e)=>actulizaropcion(e, 'op3')} className="form-control" id="opcion3"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opciontrue" className="form-label">Opcion Correcta</label>
                    <textarea disabled="true" type="text" value={srtrOpcion4} onChange={(e)=>actulizaropcion(e, 'opC')} className="form-control" id="opciontrue"/>
                </div>

            </form>
            <br/>
            <button type="button" className="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={disableButton}>
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
                    Pregunta: {pregunta}
                    </div>
                    <div class="alert alert-success" role="alert">
                    Opcion 1 : {srtrOpcion1}
                    </div>
                    <div class="alert alert-success" role="alert">
                    Opcion 2 : {srtrOpcion2}
                    </div>
                    <div class="alert alert-success" role="alert">
                    Opcion 3 : {srtrOpcion3}
                    </div>

                    <div class="alert alert-info" role="alert">
                    Opcion Correcta : {srtrOpcion4}
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
