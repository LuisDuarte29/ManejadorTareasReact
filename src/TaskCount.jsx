import React from 'react'

export function TaskCount({listaCount}) {
  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <p>Hay {listaCount} tareas</p>
    </div>
  )
}


