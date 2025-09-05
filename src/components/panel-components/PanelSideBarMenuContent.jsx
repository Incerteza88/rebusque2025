// PanelSideBarMenuContent.jsx
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer";

export const PanelSideBarMenuContent = () => {

  const { store, dispatch } = useGlobalReducer()

  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const [options, setOptions] = useState(store.panelOptions)

  useEffect(() => {
    dispatch({
      type: "setPanelOptions", payload: JSON.parse(store.isAuth).role === "proveedor" ?
        ["Trabajos", /* "Mensajes" */, "Servicios", "Perfil"]
        : ["Pedidos", /* "Mensajes" */, "Perfil"]
    })
  }, [store.isAuth])

  useEffect(() => {
    setOptions(store.panelOptions)
  }, [store.panelOptions])

  return (
    <>
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        {options.map((option, index) => {
          const lowerOption = option.toLowerCase();
          return (
            <button
              key={index}
              className={`nav-link ${index === 0 ? "active" : ""}`}
              id={`v-pills-${lowerOption}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#v-pills-${lowerOption}`}
              type="button"
              role="tab"
              aria-controls={`v-pills-${lowerOption}`}
              aria-selected={index === 0 ? "true" : "false"}
            >
              {option}
            </button>
          );
        })}

        <button
          type="button"
          className="btn btn-outline-danger border-0 mt-3 py-2"
          onClick={() => setShowConfirm(true)}
        >
          Cerrar sesión
        </button>
      </div>

      {showConfirm && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cerrar Sesión</h5>
                <button type="button" className="btn-close" onClick={() => setShowConfirm(false)}></button>
              </div>
              <div className="modal-body">
                <p>¿Está seguro de que quiere cerrar la sesión?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary rounded-pill" onClick={() => setShowConfirm(false)}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-danger rounded-pill" onClick={() => { setShowConfirm(false); dispatch({ type: "LOGOUT" }); navigate("/") }}>
                  Sí, salir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
