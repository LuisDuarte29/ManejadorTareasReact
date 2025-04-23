import React from "react";

import { CiCircleRemove } from "react-icons/ci";
import { FcRemoveImage } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";

function TaskList({ tarea, RemoveTask, EditTask }) {
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
              <h5 className="card-title mb-0">{tar.title}</h5>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-danger "
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
