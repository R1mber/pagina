import { useState } from 'react';
import FormularioMaterias from './components/FormularioMaterias';
import FormularioPregunta from './components/FormularioPregunta';
import FormularioArea from './components/FormularioArea';
import './App.css';

function App() {

  const [buttons, setButtons] = useState({
    materias: false,
    pregunta: true,
    area: false,
  });

  const changeView = (view) => {
    setButtons({
      materias: false,
      pregunta: false,
      area: false,
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
        <button className={buttons.materias?'btn btn-primary': 'btn btn-secondary'} onClick={() => changeView('materias')}>
            Materias
        </button>
        <button className={buttons.area?'btn btn-primary': 'btn btn-secondary'} onClick={() => changeView('area')}>
            Areas
        </button>
      </center>
        {buttons.materias?<FormularioMaterias/>:null}
        {buttons.pregunta?<FormularioPregunta/>:null}
        {buttons.area?<FormularioArea/>:null}
    </div>
  );
}

export default App;
