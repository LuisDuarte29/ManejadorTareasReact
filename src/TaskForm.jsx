function TaskForm({ newTask, createTask, setNewTask }) {
  return (
    <form
      className="container d-flex flex-column align-items-center mt-2"
      onSubmit={createTask}
    >
      <input
        className="m-2 form-control"
        type="text"
        style={{ maxWidth: 600 }}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button className="btn btn-danger" disabled={newTask.length === 0}>
        {" "}
        Guardar
      </button>
    </form>
  );
}

export default TaskForm;
