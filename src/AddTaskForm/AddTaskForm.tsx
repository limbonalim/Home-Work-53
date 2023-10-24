import React from 'react';

interface TaskForm {
  submitHandler: React.FormEventHandler<HTMLFormElement>;
}

const AddTaskForm: React.FC<TaskForm> = ({submitHandler}) => {
  return (
    <form action="" onSubmit={submitHandler}>
      <div className="form">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter your Task" required={true}/>
          <button className="btn btn-outline-success" type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;