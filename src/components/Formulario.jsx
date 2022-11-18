import React, { useState} from 'react'
import '../styles/formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input
    }
    props.onSubmit(newTask)
  };

  return (
    <form className='tarea-form' onSubmit={handleSubmit}>
      <input type="text" className='tarea-input' placeholder='Ingrese tarea' name='text' onChange={handleChange}/>
      <button className='tarea-button-add'>Add</button>
      <button className='tarea-button-reset' onClick={props.resetForm}>Reset</button>
    </form>
  )
}

export default Formulario;