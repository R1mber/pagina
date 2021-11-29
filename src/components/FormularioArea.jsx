import { Fragment, useEffect, useState } from "react";
export default function FormularioArea(){
    const [area, setArea] = useState("");
    const [areas, setAreas] = useState([]);
    const submit = (e) => {
        e.preventDefault();
        console.log(area);
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
