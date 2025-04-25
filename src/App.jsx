import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { taskJson } from "./TaskJson";
import { TaskFilter } from "./TaskFilter";
import {TaskCount}  from "./TaskCount"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  //desde el contexto de la tarea
  const [tarea, setTarea] = useState([]);
  const [newTask, setNewTask] = useState([]);
  const [idTarea, setIdTarea] = useState(0);
  const [titleEdit, setTitleEdit] = useState("");
  const [filterTask, setFilter] = useState("");


  // useEffect para cargar las tareas iniciales desde el archivo JSON

  useEffect(() => {
    setTarea(taskJson);
  }, []);
  const handleSetFilter = (event) => {
    setFilter(event.target.value);
    console.log("Filtrando por:", event.target.value); // Esto imprime lo que vas escribiendo
  };
 
  const filteredTasks = tarea.filter((task) =>
    task.title.toLowerCase().includes(filterTask.trim().toLowerCase())
  );
  console.log(tarea.length)
  function createTask(e) {
    e.preventDefault();

    if (idTarea !== 0) {
      // Editar tarea existente
      const tareasActualizadas = tarea.map((t) =>
        t.id === idTarea ? { ...t, title: titleEdit } : t
      );
      setTarea(tareasActualizadas);
      setIdTarea(0); // salís del modo edición
      setTitleEdit("");
    } else {
      // Crear nueva tarea
      const nuevaTarea = {
        id: tarea.length + 1,
        title: newTask,
      };
      setTarea([...tarea, nuevaTarea]);
    }

    setNewTask(""); // limpia el input
  }

  const manejadorCmbio = (e) => setTitleEdit(e.target.value);

  function EditTask(id) {
    const titleEditar = tarea.find((t) => t.id == id);
    if (titleEditar) {
      setIdTarea(id);
      setTitleEdit(titleEditar.title);
    }
  }

  function RemoveTask(id) {
    const tareaEliminada = tarea.filter((t) => t.id !== id);

    setTarea(tareaEliminada);
  }
  return (
    <div className="bg-dark text-white min-vh-100 py-4">
      <div className="container d-flex gap-1">     
        <TaskFilter filter={filterTask} handleSetFilter={handleSetFilter} />
    
    <TaskForm
      newTask={newTask}
      setNewTask={setNewTask}
      createTask={createTask}
      idTarea={idTarea}
      titleEdit={titleEdit}
      manejadorCmbio={manejadorCmbio}
    />

      </div>
        <h3 className="text-center">Lista de Tareas</h3>
        <TaskCount listaCount={filteredTasks.length} />
      <TaskList
        tarea={filteredTasks}
        RemoveTask={RemoveTask}
        EditTask={EditTask}
      />
    </div>
  );
}

export default App;
