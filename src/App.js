import './App.css';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className='App'>
      <div className='containerHeader'>
        <h1>Todo List</h1>
      </div>
      <div className='taskList'>
        <TasksList />
      </div>
      
    </div>
  );
}

export default App;
