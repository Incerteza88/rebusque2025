import { useEffect, useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import JobsCards from "../panel-components/JobsCards";
import TextTareaSendJob from "../panel-components/TextTareaSendJob";

export const JobsContent = () => {
  const { store } = useGlobalReducer();
  const counterpartLabel = store.authState == '1' ? "Proveedor" : "Cliente";

  const [works, setWorks] = useState(store.myWorks);

  useEffect(() => {
    setWorks(store.myWorks);
  }, [store.myWorks]);

  return (
    <>
      <h3 className="my- px-2 mb-3">Trabajos</h3>

      <TextTareaSendJob />

      <div className="row align-items-center w-100 fw-semibold fs-5 px-2 mb-2">
        <div className="col-3">{counterpartLabel}</div>
        <div className="col-3">Tarea</div>
        <div className="col-2">Precio</div>
        <div className="col-4">Estado</div>
      </div>
      {works.map((w, idx) => (
        <JobsCards
          key={w.id}
          work_id={w.id}
          status={w.status}
          customer={w.client.name}
          title={w.service.title}
          price={w.service.price}
          avatar={w.client.photo_url}
        />
      ))}
    </>
  );
};
