import React, { useState } from 'react';
import Formulario from './Formulario'
import '../styles/ListTask.css'
import Tarea from './Tarea';

const TasksList = () => {

    const [tasks, setTasks] = useState([]);

    const addTaks = task => {
        if(task.text.trim()){
            task.text = task.text.trim();
            const updateTasks = [task, ...tasks];
            setTasks(updateTasks);
        }
    };

    const deleteTask = id => {
        const tasksUpdate = tasks.filter(task => task.id !== id);
        setTasks(tasksUpdate);
    };

    return (
        <>
            <Formulario onSubmit={addTaks} resetForm={() => setTasks([])}/>
                <div className='container-tasks'>
                    {
                    tasks.map((task) => 
                        <Tarea
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        deleteTask={deleteTask}
                        />
                    )
                    }
                </div>
        </>
    )
}

export default TasksList