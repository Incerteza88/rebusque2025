import React, { useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";

const TextTareaSendJob = () => {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const { dispatch } = useGlobalReducer();

  const handleSaveSend = () => {
    dispatch({
      type: "saveJob",
      payload: { name, budget, description },
    });
  };

  return (
    <div>

      <div
        className="modal fade"
        id="hireModal"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content custom-modal">
            {/* Header */}
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold">Hire Lewis Bridge</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              />
            </div>

            {/* Body */}
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre del trabajo</label>
                <input
                  type="text"
                  className="form-control form-control-lg soft-input"
                  placeholder="Desarrollo de aplicaciones"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Presupuesto</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text soft-input">$</span>
                  <input
                    type="number"
                    className="form-control soft-input"
                    placeholder="30"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-1">
                <label className="form-label fw-semibold">
                  Descripción del trabajo
                </label>
                <textarea
                  className="form-control form-control-lg soft-input"
                  placeholder="Escribir..."
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>


            <div className="modal-footer border-0 pt-0 d-flex justify-content-start">
              <button
                type="button"
                className="btn text-white px-4 rounded-pill"
                style={{ backgroundColor: "#004aad", borderColor: "#004aad" }}
                data-bs-dismiss="modal"
                onClick={handleSaveSend}
              >
                Enviar presupuesto
              </button>

              <button
                type="button"
                className="btn btn-danger ms-2 rounded-pill"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default TextTareaSendJob;
