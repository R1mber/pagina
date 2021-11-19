import { Fragment, useState, useRef} from "react";
import MathView from 'react-math-view';

export default function Formulario(){

    const [pregunta, setPregunta] = useState("");
    const [preguntaa , setPreguntaa] = useState("");
    const [formula, setFormula] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [materia, setMateria] = useState('');
    const [texto, setTexto] = useState('hola como estas mathViewMTHx=\\frac{-b\\pm\\sqrt{b^2-\\frac{4/a}{2321}}}{2ab}23mathView bien');

    const [textoProcesado, setTextoProcesado] = useState([]);
    
    const ref = useRef(null);
    
    const actulizarPregunta = (e) => {
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
    
    const actulizaropcion = (e) => {
        setRespuesta(e.target.value);
    }

    const submit2 = () =>{
        //console.log(e);
        setFormula(ref.current?.getValue())
       // console.log('onModeChange', sender, mode)
    }

    const submit = (e) =>{
        e.preventDefault();
        console.log(pregunta);
        console.log(formula);
        console.log(respuesta);
        console.log(materia);
    }
    return(
        <Fragment>
            <center><h1>Agregar Pregunta</h1> </center>
            <MathView
                value={texto}
                ref={ref}
            />
            <h2>{pregunta} : {texto}
            </h2>
            {respuesta}
            <h3>{formula}</h3>
            <p> pppppppppp <MathView value={formula}/> ffffffffffff</p>

            <button onClick={submit2}>Enviar</button>
            <button onClick={procesarTexto}>procesar</button>
            {mostrarTextoProcesado()}
            <form onSubmit={submit}>
                Seleccione una materia:
                <select className="form-select" onChange={(e)=>setMateria(e.target.value)}>
                    <option value="0">seleccione una materia</option>
                    <option value="Mate">Matematicas</option>
                    <option value="Fisica">Lenguaje</option>
                    <option value="ciencias">Ciencias</option>
                </select>
                <div className="mb-0 row g-3">
                    <label htmlFor="pregunta" className="form-label">Pregunta</label>
                    <input onChange={actulizarPregunta} type="text" className="form col-sm-8" id="pregunta"/>
                    <button className="col-sm-3">agregar fromula matematica</button>

                </div>
                <div className="mb-0">
                    <label htmlFor="opcion1" className="form-label">Opcion 1</label>
                    <input type="text" onChange={actulizaropcion} className="form-control" id="opcion1"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion2" className="form-label">Opcion 2</label>
                    <input type="text" className="form-control" id="opcion2"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opcion3" className="form-label">Opcion 3</label>
                    <input type="text" className="form-control" id="opcion3"/>
                </div>
                <div className="mb-0">
                    <label htmlFor="opciontrue" className="form-label">opcion Correcta</label>
                    <input type="text" className="form-control" id="opciontrue"/>
                </div>
                <div className="mb-1">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </Fragment>
    );
}
