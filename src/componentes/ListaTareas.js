import React, {useState } from "react";
import Tarea from "./Tarea";

function ListaTareas({ tareas, eliminarTarea }) {
   

    return (
        <ul>
            {tareas.map((tarea, index) => (
                <Tarea 
                    key={index} 
                    tarea={tarea} 
                    index={index} 
                    eliminarTarea={eliminarTarea} 
                />
            ))}
        </ul>
    );
}
export default ListaTareas;