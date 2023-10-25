import React from 'react';

interface Task {
  text: string;
  done: boolean;
  clickDeleteHandler: React.MouseEventHandler;
  clickDoneHandler: React.ChangeEventHandler;
}

const Task: React.FC<Task> = ({text, done, clickDeleteHandler,clickDoneHandler }) => {
  return (
    <div
      className=" my-1 d-flex align-items-center justify-content-between border border-primary rounded p-2 bg-opacity-75 bg-info-subtle">
      <label form="done">
        <input type="checkbox" name="done" onChange={clickDoneHandler} checked={done}/>
        <span className="text-secondary mx-1">{text}</span>
      </label>
      <button type="button" className="btn btn-outline-danger" onClick={clickDeleteHandler}>Delete</button>
    </div>
  );
};

export default Task;