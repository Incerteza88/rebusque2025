import { use, useEffect, useState } from "react"
import { getServices } from "../../services/fetch"
import { ServiceRow } from "./ServiceRow.jsx"
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx"

export const ServicesContent = () => {

  const { store, dispatch } = useGlobalReducer()

  const [myServices, setMyServices] = useState([])
  const user = JSON.parse(localStorage.getItem("isAuth"))
  const userEmail = user.email ? user.email : ""

  useEffect(() => {

    getServices(userEmail, "", "", "", "").then((data) => {
      dispatch({ type: "setCurrentUserServices", payload: data })
    })
  }, [])

  useEffect(() => {
    setMyServices(store.currentUserServices)

  }, [store.currentUserServices])

  return (
    <div className="w-100">
      {myServices.length > 0 ? myServices.map((service) => (
        <ServiceRow key={service.id} id={service.id} />
      )) : <p className="text-center">No tienes servicios publicados</p>
      }
    </div>
  )
}