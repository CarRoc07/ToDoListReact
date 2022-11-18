import React from "react";
import '../styles/tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


const Tarea = ( {text, id, deleteTask} ) => {
    return (
        <div className="container-tarea">
            <div className="tarea-text" >
                {text}
            </div>
            <div className="tarea-container-icon">
                <AiOutlineCloseCircle className="tarea-icon" onClick={() => deleteTask(id)}/>
            </div>
            
        </div>
    )
}

export default Tarea;




