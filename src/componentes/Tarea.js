import React, {useState } from "react";
function Tarea({tarea, index, eliminarTarea}){

    const [check,setCheck]= useState(false);
        
    const estilos = {
        texto: {
            textDecoration: check ? "line-through" : "none", 
        },
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 0' }}>
            <button onClick={() => setCheck(!check)}>
                {check ? "Desmarcar" : "Marcar"}
            </button>

            <li style={estilos.texto}>{tarea}</li>            
            
            <button onClick={() => eliminarTarea(index)}>Borrar</button>
        </div>
    );

    
}
export default  Tarea;