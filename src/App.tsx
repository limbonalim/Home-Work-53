import Task from './Task/Task.tsx';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm.tsx';
import {useState} from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 'Hello,World!', text: 'Hello, World!'},
    {id: 'ButSome', text: 'Go to market and buy some grocery'},
    {id: 'GoTo', text: 'Go to ...'},
  ])

  const getRandom = (length:number):string => {
    const alphabet = 'abcdefghiklmnopqrstvxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      const getRandom = Math.floor(Math.random() * alphabet.length);
      result += alphabet[getRandom];
    }
    return result
  }

  const getId = ():string => {
    const randomLength = Math.ceil(Math.random() * 10 + 3);
    const date = new Date().toISOString();
    return `${date}/${getRandom(randomLength)}`;
  };
  const createTask = (event) => {
    event.preventDefault();
    const tasksCopy = tasks.map(task => {
      return {...task};
    });
    const task = {
      id: `${getId()}`,
      text: `${event.target[0].value}`,
    }
    tasksCopy.push(task);
    setTasks(tasksCopy);
    event.target[0].value = '';
  };

  const tasksList = tasks.map(task => {
    return <Task key={task.id} text={task.text}/>
  })
  return (
    <div className="app">
      <AddTaskForm submitHandler={(event) => createTask(event)}/>
      <div className="d-flex flex-column-reverse">
        {tasksList}
      </div>
    </div>
  );
};

export default App;
