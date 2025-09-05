import React from 'react'
import useGlobalReducer from '../../hooks/useGlobalReducer'
import JobsAction from './JobsAction'

function JobsCards({ status, customer, title, price, avatar, work_id }) {
  const { store } = useGlobalReducer()


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

      <div className="col-3 text-truncate">{title}</div>

      <div className="col-2">${Number(price).toFixed(2)}</div>

      <div className="col-4 text-truncate">
        <JobsAction
          work_id={work_id}
          authState={store.authState}
          statusLabel={status}
          onChange={(newStatus) => {

            // store.setStatus(newStatus);

          }}
        />
      </div>

    </div>
  )
}

export default JobsCards
