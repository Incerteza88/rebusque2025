import React from 'react'
import useGlobalReducer from '../../hooks/useGlobalReducer'

function JobsCards({ status, customer, title, price, avatar }) {
  const { store } = useGlobalReducer()
  const roleType = store?.isAuth?.role

  const statusLabel =
    {
      a: "Esperando confirmación",
      b: "En curso",
      c: "Entregado",
      d: "Completo",
    }[status] ?? "—"

  return (
    
    <div className="row align-items-center w-100 g-0 px-2 py-2 border-bottom">
      
      <div className="col-3">
        <div className="d-flex align-items-center text-truncate">
          <div
            style={{ width: 40, height: 40, overflow: "hidden" }}
            className="rounded-circle me-2"
          >
            <img
              className="w-100 h-100 object-fit-cover"
              src={avatar}
              alt="Avatar"
            />
          </div>
          <span className="text-truncate">{customer}</span>
        </div>
      </div>

      
      <div className="col-2 text-truncate">{title}</div>
      
      <div className="col-1">${Number(price).toFixed(2)}</div>
     
      <div className="col-3 text-truncate">
        <span>{statusLabel}</span>
      </div>
      
      <div className="col-3 text-end">
        <button
          className="btn rounded-pill btn-primary"
          hidden={roleType !== 'cliente'}
          data-bs-toggle="modal"
          data-bs-target="#hireModal"
        >
          Enviar Trabajo
        </button>
      </div>
    </div>
  )
}

export default JobsCards
