import {Simulate} from 'react-dom/test-utils';
import submit = Simulate.submit;
import {EventHandler} from 'react';

interface TaskForm {
  clickHandler: EventHandler<HTMLFormElement>
}

const AddTaskForm = ({submitHandler}) => {
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