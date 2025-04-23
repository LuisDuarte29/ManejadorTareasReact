import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { taskJson } from "./TaskJson";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  //desde el contexto de la tarea
  const [tarea, setTarea] = useState([]);
  const [newTask, setNewTask] = useState([]);
  useEffect(() => {
    setTarea(taskJson);
  }, []);
  function createTask(e) {
    e.preventDefault();
    const nuevaTarea = {
      id: tarea.length + 1,
      title: newTask,
    };
    setTarea([...tarea, nuevaTarea]);
    setNewTask("");
  }

  // function editTask(e){
  //   e.preventDefault()
  //   const nuevaTarea={
  //     id:tarea.length+1,
  //     title:newTask
  //   }
  //   setTarea([...tarea,nuevaTarea])
  //   setNewTask('')
  // }

  function RemoveTask(id) {
    const tareaEliminada = tarea.filter((t) => t.id !== id);

    setTarea(tareaEliminada);
  }
  return (
    <div className="bg-dark text-white min-vh-100 py-4">
      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        createTask={createTask}
      />
      <TaskList tarea={tarea} RemoveTask={RemoveTask} />
    </div>
  );
}

export default App;
