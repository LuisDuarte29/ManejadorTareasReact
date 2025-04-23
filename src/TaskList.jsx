import React, { useState } from "react";
import { FcRemoveImage } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";

function TaskList({ tarea, RemoveTask, EditTask }) {
  const [tachados, setTachados] = useState({});


  //La funcion tiene un 
const handleCambioCheck=(id) => {
  //el prev como parametro se llena a medida que se va haciendo el check por ejemplo si presionamos el id:5 entonces se llena como 5:true
  (setTachados((prev)=>({
    // el ...prev repite los campos que no se van a modificar y solo cambia lo que se hace check
    ...prev,
    //el corchete se usa para que dinamicamente se pueda acceder a la propiedad en este caso id
    // comparamos el id del parametro entre corchetes ya que asi es react con el objeto prev en su id, el ! es para cambiar de true a false o viceversa
    [id]:!prev[id]
  })))
}

  return (
    <div className="container d-flex flex-column align-items-center mt-4 align">
      {tarea.length < 1 ? (
        <h1>No existen tareas</h1>
      ) : (
        tarea.map((tar) => (
          <div
            className="card w-100 mb-3 shadow-sm"
            style={{ maxWidth: "600px" }}
            key={tar.id}
          >
            <div className="card-body d-flex justify-content-between align-items-center align">
              <input
                type="checkbox"
                //es doble !! ya que si es undefined con ! no sirve entonces el !! solo se usa en este caso para que el valor sea booleano si o si
                //el parametro tar.id en tachados es para leer cual es el idseleccionado y el onchange es para el cambio de estado mediante el parametro id
                checked={!!tachados[tar.id]}
                onChange={() => handleCambioCheck(tar.id)}
              />
              <h5
                className="card-title mb-0 ms-2 flex-grow-1"
                style={{
                  textDecoration: tachados[tar.id] ? "line-through" : "none",
                }}
              >
                {tar.title}
              </h5>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => RemoveTask(tar.id)}
                >
                  <FcRemoveImage size={30} />
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => EditTask(tar.id)}
                >
                  <CiEdit size={30} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
