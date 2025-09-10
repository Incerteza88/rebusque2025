import { Link } from "react-router";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import defaultPhoto from "../../assets/img/default_user.jpg"

export const ServiceRow = ({ id }) => {

    const { store, dispatch } = useGlobalReducer()

    const [service, setService] = store.currentUserServices.length > 0 ? useState(store.currentUserServices.filter((s) => s.id === id)[0]) : useState({
        average_rating: 0,
        category: "",
        contracts: [],
        description: "",
        id: 1,
        photo_url: null,
        price: 52500,
        provider: {
            email: "alguien@example.com",
            id: 1,
            is_active: true,
            name: "name",
            last_name: "last_name",
            phone: "123456789",
            photo_url: null,
            role: "proveedor"
        }
        //controlamos que no pete si no hay servicios en el store
    })

    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    return (
        <div className="col align-items-start text-start mb-2" >
            <div className="text-start d-flex align-items-start border border-primary rounded-4 rounded-bottom-0 p-3 w-100" onClick={handleShowModal}>
                <div className="text-center">
                </div>
                <div className="ms-2 ">
                    <h3 className="fw-bold fs-5"><span className="text-primary">Título: </span>{service.title}</h3>
                    <p className="fw-semibold"><span className="text-primary">Descripción: </span>{service.description}</p>
                    <p className="fw-semibold text-primary">Categoría: <span className="badge rounded-pill border border-primary text-primary mb-0">{service.category}</span></p>
                    <p className="fw-semibold"><span className="text-primary">Precio: </span>{service.price} $</p>
                    {/* <p className="mb-0">{service.provider.phone}</p> */}
                </div>
            </div>
            <div className="d-flex text-bg-primary border-top-0 rounded-4 rounded-top-0 p-3 py-2 w-100">
                <button className="ms-auto btn btn-light rounded-pill">Editar</button>
                <button className="ms-1 btn btn-danger rounded-pill">Borrar</button>
            </div>

            <Modal show={show} onHide={handleCloseModal} className="rounded-5">
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex align-items-center gap-3">
                        <img src={service.provider.photo_url === null ? defaultPhoto : service.provider.photo_url} width="50" className="rounded-5 border border-dark"
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = defaultPhoto;
                            }} />
                        <div>
                            {service.title}
                            <p className="fw-semibold mb-0 fs-6 inline-limit text-primary">{service.provider.name} {service.provider.last_name}</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{service.description}</Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleCloseModal} className="rounded-pill">
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal} className="rounded-pill">
                        Contratar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}