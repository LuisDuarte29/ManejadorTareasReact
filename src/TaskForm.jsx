function TaskForm({ newTask, createTask, setNewTask,idTarea,titleEdit,manejadorCmbio }) {
  return (
    <form
      className="container d-flex flex-column align-items-center mt-2"
      onSubmit={createTask}
    >
  <h6>Guardar Tareas</h6>
<input
        className="m-2 form-control"
        type="text"
        style={{ maxWidth: 300 }}
        value={idTarea===0 ? newTask : titleEdit}
        onChange={idTarea===0 ? (e) => setNewTask(e.target.value) :manejadorCmbio }
      ></input>
      <button className="btn btn-danger" disabled={titleEdit=='' && newTask.length === 0}>
        {idTarea===0 ? "Guardar" :"Actualizar"}
        
      </button>
    </form>
  );
}

export default TaskForm;
