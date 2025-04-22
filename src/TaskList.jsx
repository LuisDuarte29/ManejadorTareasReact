import React from 'react'
import {taskJson} from './TaskJson'
import { useState } from 'react'
import { useEffect } from 'react'
import {CiCircleRemove} from 'react-icons/ci'
import {FcRemoveImage} from 'react-icons/fc'



function TaskList({ tarea, RemoveTask }) {
    return (
      <div className="container d-flex flex-column align-items-center mt-4">

        {tarea.length<1  ? 

                <h1>No existen tareas</h1>
         :  tarea.map((tar) => (
            <div
              className="card w-100 mb-3 shadow-sm"
              style={{ maxWidth: "600px" }}
              key={tar.id}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">{tar.title}</h5>
                <button className="btn btn-outline-danger" onClick={() => RemoveTask(tar.id)}>
                  <FcRemoveImage size={30} />
                </button>
              </div>
            </div>
          ))}
      
      </div>
    );
  }
  
  
  export default TaskList;
  
