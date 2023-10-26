import Task from './Task/Task.tsx';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm.tsx';
import React, {useState} from 'react';

interface Tasks {
  id: string;
  text: string;
  done: boolean;
}

const App = () => {
  const [currentTask, setCurrentTask] = useState<Tasks[]>([
    {id: 'Hello,World!', text: 'Hello, World!', done: true},
    {id: 'BuySome...', text: 'Go to market and buy some grocery', done: true},
    {id: 'GoTo...', text: 'Go to ...', done: false},
  ]);

  const getRandom = (length: number): string => {
    const alphabet = 'abcdefghiklmnopqrstvxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      const getRandom = Math.floor(Math.random() * alphabet.length);
      result += alphabet[getRandom];
    }
    return result;
  };

  const getId = (): string => {
    const randomLength = Math.ceil(Math.random() * 10 + 3);
    const date = new Date().toISOString();
    return `${date}/${getRandom(randomLength)}`;
  };

  const getCopy = (): Tasks[] => {
    return currentTask.map(task => {
      return {...task};
    });
  };
  const createTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const tasksCopy = getCopy();
    const task = {
      id: `${getId()}`,
      text: `${event.target[0].value}`,
      done: false,
    };
    tasksCopy.push(task);
    setCurrentTask(tasksCopy);
    event.target[0].value = '';
  };

  const deleteTask = (id) => {
    setCurrentTask(prevState => {
      return prevState.filter((task) => {
        return id !== task.id ? {...task} : false;
      });
    });
  };

  const doneTask = (id) => {
    let tasksCopy = getCopy();
    tasksCopy.forEach((task) => {
      if (id === task.id) {
        let status = task.done;
        task.done = !status;
        return {...task};
      } else {
        return {...task};
      }
    });
    setCurrentTask(tasksCopy);
  };

  const tasksList = currentTask.map(task => {
    return <Task key={task.id} text={task.text} done={task.done} clickDeleteHandler={() => deleteTask(task.id)}
                 clickDoneHandler={() => doneTask(task.id)}/>;
  });

  return (
    <div className="app">
      <AddTaskForm submitHandler={(event) => createTask(event)}/>
      {currentTask.length > 0 ?
        <div className="d-flex flex-column-reverse border border-secondary-subtle border-opacity-50 rounded px-1">
          {tasksList}
        </div> : null
      }
    </div>
  );
};

export default App;
