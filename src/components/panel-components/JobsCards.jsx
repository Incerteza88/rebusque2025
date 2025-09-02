import React from 'react'
import useGlobalReducer from '../../hooks/useGlobalReducer'
import TextTareaSendJob from './TextTareaSendJob'

function JobsCards({ status }) {
  const { store, dispatch } = useGlobalReducer()
  const roleType = store?.isAuth?.role
  const { estadoModal, trabajo } = store || {}

  console.log(trabajo)

  return (
    <div className="d-flex border border-end-0 p-3">
        {
      estadoModal ? <div className='miModal'><TextTareaSendJob/></div> : <p></p>
     }
      <div className="row align-items-center text-start w-100">
        <div className="col-3">
          <div className="d-flex align-items-center text-start">
            <div style={{ width: 40, height: 40 }}>
              <div className="ratio ratio-1x1">
                <img
                  className="w-100 h-100 object-fit-cover rounded-circle"
                  src="https://img.asmedia.epimg.net/resizer/v2/JRI3SULN7VAR3NIHHAPEVTNVMY.jpg?auth=bc84d1a36158bebf15cf49d7b6f46cb6afb8e9df3677e7b2086b31ffdd314c42&width=1472&height=828&smart=true"
                  alt="Avatar"
                />
              </div>

            </div>
            <span className="ms-2">Eduardo García Valverde</span>
          </div>
        </div>

        <div className="col-2">Youtube Editing</div>
        <div className="col-1">$80</div>

        <div className="col-3">
          <span className="p-0">Esperando confirmación</span>
        </div>

        <div className="col-3">
          <button
            className="btn rounded-pill btn-primary"
            hidden={roleType !== 'cliente'}
            onClick={() => dispatch({ type: 'stateModal', payload: true })}
          >
            Enviar Trabajo
          </button>
        </div>
        
      </div>

      
    </div>
  )
}

export default JobsCards
