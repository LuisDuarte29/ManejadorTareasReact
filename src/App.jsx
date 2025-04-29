import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { taskJson } from "./TaskJson";
import { TaskFilter } from "./TaskFilter";
import {TaskCount}  from "./TaskCount"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { removeItem } from "framer-motion";
function App() {
  //desde el contexto de la tarea
  const [tarea, setTarea] = useState([]);
  const [newTask, setNewTask] = useState([]);
  const [idTarea, setIdTarea] = useState(0);
  const [titleEdit, setTitleEdit] = useState("");
  const [filterTask, setFilter] = useState("");
  const [cantidadTrue, setCantidadTrue] = useState([]);
  const [tachados, setTachados] = useState({});
  const [resto,setResto]=useState(0)


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
    
    //Lo que hace es decirle al id que es true si lo es, que le asigne _ y que lo agrupe con el resto
    // pero como es de valor _ no lo agrupa y solo queda los restantes dentro de old
    setTachados(old => {
      const { [id]: _, ...rest } = old;
      return rest;
    });
    console.log("Tarea restantes: ", tarea);
    Object.entries(tachados).forEach(([clave, valor]) => {
      console.log( `este es la clave ${clave}: ${valor}`);
    });

  }
  const handleCambioCheck = (id) => {
    setTachados((prev) => ({
      ...prev,
      [id]: !prev[id],
      
    }));

  };

  useEffect(()=>{
    
  })


  //El Object.values se usa para convertir de objeto a un array ya que el filter solo se puede usar en array
  useEffect(()=>{
    setCantidadTrue(Object.values(tachados).filter((value) => value === true).length)

  },[tachados])
  console.log("Este es la cantidad de true que hay: " + cantidadTrue)
useEffect(()=>{
   setResto(filteredTasks.length-cantidadTrue)  

},[filteredTasks,cantidadTrue])

useEffect(()=>{
  if(resto>=4){
    alert("Ya haz alcanzado el limite de pendientes")
  }
},[resto])

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
        <TaskCount listaCount={filteredTasks.length} itemTachados={cantidadTrue} resto={resto} />
      <TaskList
        tarea={filteredTasks}
        RemoveTask={RemoveTask}
        EditTask={EditTask}
        tachados={tachados}
        handleCambioCheck={handleCambioCheck}
      />
    </div>
  );
}

export default App;
