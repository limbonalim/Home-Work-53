const AddTaskForm = () => {
  return (
    <form action="">
      <div className="form">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter your Task"/>
          <button className="btn btn-outline-success" type="button">Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;