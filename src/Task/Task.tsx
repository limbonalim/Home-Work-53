import React from 'react';

interface Task {
  text: string;
  clickHandler: React.MouseEventHandler;
}

const Task: React.FC<Task> = ({text, clickHandler}) => {
  return (
    <div
      className=" my-1 d-flex align-items-center justify-content-between border border-primary rounded p-2 bg-opacity-75 bg-info-subtle">
      <span className="align-self-center text-secondary">{text}</span>
      <button type="button" className="btn btn-outline-danger" onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default Task;