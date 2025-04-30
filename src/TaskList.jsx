import React, { useState,useRef,useEffect } from "react";
import { FcRemoveImage } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

function TaskList({ tarea, RemoveTask, EditTask,tachados, handleCambioCheck }) {

  //el useRef se usa para hacer referencia a algo en este caso a elementos del DOM 
  //en este caso yo hago referencia a un div que esta ultimo 
  //lo que hace en este caso es referenciar el div y luego realizar alguna animacion o cambio sin hacer un render
  //en este caso lo que hace es si es el div que hago referencia que me haga un scroll hacia abajo 
  //current seria como la propiedad que esta en el elemento del DOM
const finListaRef=useRef(null)

useEffect(()=>{
if (finListaRef.current){
  finListaRef.current.scrollIntoView({behavior:"smooth"})
}

})
  return (
    <div  className="container d-flex flex-column align-items-center mt-4">
      {tarea.length < 1 ? (
        <h1>No existen tareas</h1>
      ) : (
        <AnimatePresence mode="popLayout">
          {tarea.map((tar) => (
            < motion.div
              layout
              key={tar.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="card w-100 mb-3 shadow-sm"
              style={{ maxWidth: "600px", borderRadius: "10px", height: "70px" }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <input
                  type="checkbox"
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
            </motion.div>
          ))}
        </AnimatePresence>
      )}
         <div ref={finListaRef}></div>
    </div>
  );
}

export default TaskList;
