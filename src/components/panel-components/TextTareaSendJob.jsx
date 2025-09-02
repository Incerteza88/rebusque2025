import React, { useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";

const TextTareaSendJob = () => {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const { dispatch } = useGlobalReducer();

  const handleSaveSend = () => {
    // Guardar la info en el store
    dispatch({
      type: "saveJob",
      payload: { name, budget, description },
    });
    dispatch({
      type: "stateModal",
      payload: false,
    });
  };

  return (
    <div className="h-100 w-100 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Nombre del trabajador</h2>

        
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Tipo de trabajo
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="App Development"
            className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="$30"
            className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Descripción del trabajo
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Escriba aquí..."
            className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            rows={4}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            onClick={() =>
              dispatch({
                type: "stateModal",
                payload: false,
              })
            }
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleSaveSend}
          >
            Submit proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextTareaSendJob;
