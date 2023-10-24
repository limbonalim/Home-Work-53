const Task = ({text}) => {
  return (
    <div
      className=" my-1 d-flex align-items-center justify-content-between border border-primary rounded p-2 bg-opacity-75 bg-info-subtle">
      <span className="align-self-center text-secondary">{text}</span>
      <button type="button" className="btn btn-outline-danger">Delete</button>
    </div>
  );
};

export default Task;