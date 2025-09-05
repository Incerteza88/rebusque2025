import useGlobalReducer from "../../hooks/useGlobalReducer"
import { starsVisual } from "../../services/generalServices"
import defaultPhoto from "../../assets/img/default_user.jpg"

export const ProfileContent = () => {

  const { store, dispatch } = useGlobalReducer()
  const user = JSON.parse(localStorage.getItem("isAuth"))

  return (
    <div className="w-100 fs-5 d-flex align-items-center">
      <div className="text-center mb-4 w-50">
        <img src={user.photo_url ? user.photo_url : defaultPhoto} width="200" className="rounded-5 border border-dark"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = defaultPhoto;
          }} />
      </div>
      <div className="ms-3">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Apellido(s):</strong> {user.last_name}</p>
        <p><strong>Teléfono:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role === "cliente" ? "Cliente" : "Proveedor"}</p>
        <p> {starsVisual(user.average_rating)} {user.average_rating} </p>
      </div>
    </div>
  )
}
