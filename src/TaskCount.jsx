import React from 'react'

export function TaskCount({listaCount, itemTachados}) {
  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <p>Hay {listaCount} tareas de los cuales {itemTachados} estan tachados</p>
    </div>
  )
}


