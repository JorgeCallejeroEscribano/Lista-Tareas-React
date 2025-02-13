import React, {useState } from "react";

function FormularioTarea({ añadirTarea }) {
   
    const [tarea, setTarea] = useState('');

    function manejarSubmit(e){
        e.preventDefault();
        añadirTarea(tarea);     
    }
    return(
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <form onSubmit={manejarSubmit}>
                <label htmlFor="tarea">Tarea: </label>
                <input type="text" id="tarea" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
                <button type="submit">Añadir</button>
            </form >
        </div>

    )
    
}
export default FormularioTarea;
