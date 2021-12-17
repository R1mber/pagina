import { useState } from 'react';
import FormularioMaterias from './components/FormularioMaterias';
import FormularioPregunta from './components/FormularioPregunta';
import FormularioPreguntaMath from './components/FormularioPreguntaMath';
import FormularioArea from './components/FormularioArea';
import FormularioCarrera from './components/FormularioCarrera';
import './App.css';

function App() {

  const [buttons, setButtons] = useState({
    materias: false,
    pregunta: true,
    area: false,
    carrera: false,
    preguntaMath: false,
  });

  const changeView = (view) => {
    setButtons({
      materias: false,
      pregunta: false,
      area: false,
      carrera: false,
      preguntaMath: false,
    });
    setButtons({
      [view]: true,
    });
  }
  
  return (
    <div className='container'>
      <center>
        <h1>LLenado de datos</h1>
        <button className={buttons.pregunta?'btn btn-primary': 'btn btn-secondary'} onClick={() => changeView('pregunta')}>Preguntas</button>
        <button className={buttons.preguntaMath?'btn btn-primary': 'btn btn-secondary'} onClick={() => changeView('preguntaMath')}>Preguntas Math</button>
        {/*<button className={buttons.materias?'btn btn-primary': 'btn btn-secondary'} onClick={() => changeView('materias')}>
            Materias
        </button>}
        <button className={buttons.area?'btn btn-primary': 'btn btn-secondary'} onClick={() => changeView('area')}>
            Areas
        </button>
        <button className={buttons.carrera?'btn btn-primary': 'btn btn-secondary'} onClick={() => changeView('carrera')}>
            Carreras
        </button>*/}
      </center>
        {buttons.materias?<FormularioMaterias/>:null}
        {buttons.pregunta?<FormularioPregunta/>:null}
        {buttons.area?<FormularioArea/>:null}
        {buttons.carrera?<FormularioCarrera/>:null}
        {buttons.preguntaMath?<FormularioPreguntaMath/>:null}
    </div>
  );
}
/*
ÁREA CIENCIAS SOCIALES Y HUMANIDADES
ÁREA CIENCIAS DE LA SALUD
ÁREA CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS
ÁREA CIENCIAS TECNOLÓGICAS Y AGRARIAS
*/
export default App;
