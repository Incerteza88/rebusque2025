import { Link } from "react-router";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ServiceCard = ({ id }) => {

    const { store, dispatch } = useGlobalReducer()

    let service = store.services.filter((s) => s.id === id)[0]

    return (
        <div className="col align-items-start text-start">
            <div className="d-flex align-items-start border border-primary rounded-4 rounded-bottom-0 p-3 w-100">
                <div className="text-center">
                    <img src={service.provider.photo_url === null ? "src/assets/img/default_user.jpg" : service.provider.photo_url} width="50" className="rounded-5 border border-dark"
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "src/assets/img/default_user.jpg";
                        }} />
                    <p className="my-0">x/5</p> {/* cambiar por service.rating cuando lo tengamos */}
                    <i className="bi bi-star-fill text-warning"></i>
                </div>
                <div className="ms-2 inline-limit">
                    <h3 className="fw-bold mb-0 fs-4 inline-limit">{service.title}</h3>
                    <h3 className="fw-bold mb-0 fs-5 inline-limit">{service.provider.name}</h3>
                    <p className="mb-0">{service.provider.phone}</p>
                    {/* <p className="mb-0 inline-limit">{service.works.map((w) => <span key={w} className=" mx-1 badge rounded-pill border border-primary text-primary">{store.categories.find((cat) => cat.id === w)[0].name}</span>)}</p> */}
                </div>
            </div>
            <div className="d-flex text-bg-primary border-top-0 rounded-4 rounded-top-0 p-3 py-2 w-100">

                <p className="mb-0 ms-2 pt-1"><i className="bi bi-geo"></i> x km</p> {/* cambiar por service.distance cuando lo tengamos */}
                <Link className="ms-auto btn btn-light rounded-pill">Contratar</Link>
            </div>
        </div>
    )
}