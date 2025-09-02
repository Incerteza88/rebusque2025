import { useState } from "react"
import JobsCards from "../panel-components/JobsCards"


export const JobsContent = () => {

  // a = esperando confirmación,
  // b = en curso
  // c = entregado
  // d = completo

  const [workStatus, setWorkStatus] = useState("a")
  const services = [{
    title: "Escultura en Madera",
    description: "Figura tallada a mano en madera de cedro, con acabado artesanal y detalles finos.",
    price: 250.00,
    customer: "Ana Martínez"
  },
  {
    title: "Tejido en Crochet",
    description: "Manta hecha a mano con hilo de algodón, diseño colorido y único para decoración.",
    price: 80.00,
    customer: "Luis Fernández"
  },
  {
    title: "Cerámica Pintada",
    description: "Juego de platos y tazas de cerámica pintados a mano con motivos florales.",
    price: 150.00,
    customer: "Sofía Ramírez"
  }] //aqui pongo las propiedades de las entidades representadas en la base de datos de forma temporal para poder trabajarlo.

  // mapeo trabajos base datos del usuario



  return (
    <>
      <div><h5 className="my-3 ">Jobs</h5></div>
      <div className="row">
        <div className="col-3">Cliente</div>
        <div className="col-2">Tarea</div>
        <div className="col-1">Precio</div>
        <div className="col-3">Estado</div>
      </div>
    {services.map( () => <p>Mapeo de services</p>)}
      <JobsCards status={workStatus}  />
    </>


  )
}
