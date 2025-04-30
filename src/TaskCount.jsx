import React from 'react'

export function TaskCount({listaCount, itemTachados,resto}) {

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <p>Hay {listaCount} tareas de los cuales {itemTachados} estan tachados</p>
      {resto>=4 &&  <p>Hay {resto} pendientes</p> }
     
    </div>
  )
}


