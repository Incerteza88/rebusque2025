// PanelContent.jsx
import { JobsContent } from "../panel-content-components/JobsContent";
import { MessagesContent } from "../panel-content-components/MessagesContent";
import { ServicesContent } from "../panel-content-components/ServicesContent";
import { ProfileContent } from "../panel-content-components/ProfileContent";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const PanelContent = () => {

  const { store, dispatch } = useGlobalReducer()
  const [options, setOptions] = useState(store.panelOptions)

  useEffect(() => {
    dispatch({
      type: "setPanelOptions", payload: JSON.parse(store.isAuth).role === "proveedor" ?
        ["Trabajos", "Mensajes", "Servicios", "Perfil"]
        : ["Pedidos", "Mensajes", "Perfil"]
    })
  }, [store.isAuth])

  useEffect(() => {
    setOptions(store.panelOptions)
  }, [store.panelOptions])

  return (
    <div className="col-9">
      <div className="h-100">
        <div className="tab-content" id="v-pills-tabContent">
          {options.map((option, index) => {
            const lowerOption = option.toLowerCase();

            let contenido = null;
            if (index === 0) contenido = <JobsContent />;
            else if (index === 1) contenido = <MessagesContent />;
            else if (index === 2) contenido = <ServicesContent />;
            else if (index === 3) contenido = <ProfileContent />;

            return (
              <div
                key={lowerOption}
                className={`tab-pane fade show ${index === 0 ? "active" : ""}`}
                id={`v-pills-${lowerOption}`}
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabIndex={0}
              >
                {contenido}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
