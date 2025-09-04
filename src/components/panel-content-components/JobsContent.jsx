import { useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import JobsCards from "../panel-components/JobsCards";
import TextTareaSendJob from "../panel-components/TextTareaSendJob";

export const JobsContent = () => {
  const [workStatus] = useState("a");
  const { store } = useGlobalReducer();
  const roleType = store?.isAuth?.role;
  const counterpartLabel = roleType === "cliente" ? "Proveedor" : "Cliente";

  const services = [
    {
      title: "Escultura en Madera",
      description: "Figura tallada a mano en madera de cedro, con acabado artesanal y detalles finos.",
      price: 250.0,
      customer: "IKEA",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg"
    },
    {
      title: "Tejido en Crochet",
      description: "Manta hecha a mano con hilo de algodón, diseño colorido y único para decoración.",
      price: 80.0,
      customer: "Nike",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
    },
    {
      title: "Cerámica Pintada",
      description: "Juego de platos y tazas de cerámica pintados a mano con motivos florales.",
      price: 150.0,
      customer: "Starbucks",
      avatar: "https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg"
    }
  ];

  return (
    <>
      <h3 className="my- px-2 mb-3">Trabajos</h3>

      <TextTareaSendJob />

      <div className="row align-items-center w-100 fw-semibold fs-5 px-2 mb-2">
        <div className="col-3">{counterpartLabel}</div>
        <div className="col-2">Tarea</div>
        <div className="col-1">Precio</div>
        <div className="col-3">Estado</div>
      </div>

      {services.map((s, idx) => (
        <JobsCards
          key={idx}
          status={workStatus}
          customer={s.customer}
          title={s.title}
          price={s.price}
          avatar={s.avatar}
        />
      ))}
    </>
  );
};
