import React, {useState } from "react";
import FormularioTarea from './componentes/FormularioTarea';
import ListaTareas from './componentes/ListaTareas';

const App = () =>{
    const [tareas, setTareas] = useState([]); 
    
    function añadirTarea(nuevaTarea){
        setTareas((prevTareas) => [...prevTareas, nuevaTarea]); 
    
    }
    
    function eliminarTarea(index){
        setTareas((prevTareas) => prevTareas.filter((_, i) => i !== index));
    
    }

    return(
        <div>
            <FormularioTarea añadirTarea={añadirTarea} />
            <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />        
        </div>
    )
}
export default App;
