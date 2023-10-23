import Task from './Task/Task.tsx';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm.tsx';

const App = () => (
  <div>
    <AddTaskForm/>
    <Task text='Hello'/>
  </div>
);

export default App;
