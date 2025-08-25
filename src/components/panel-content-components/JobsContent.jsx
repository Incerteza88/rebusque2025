import JobsCards from "../panel-components/JobsCards"
export const JobsContent = () => {



  return (
    <>
      <div><h5 className="my-3 ">Jobs</h5></div>
      <div className="row">
        <div className="col-3">Cliente</div>
        <div className="col-2">Tarea</div>
        <div className="col-1">Precio</div>
        <div className="col-3">Estado</div>
      </div>

      <JobsCards />
    </>


  )
}
