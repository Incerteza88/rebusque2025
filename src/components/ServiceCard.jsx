import { Link } from "react-router";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { starsVisual } from "../services/generalServices";

export const ServiceCard = ({ id }) => {

    const { store, dispatch } = useGlobalReducer()

    const [service, setService] = useState(store.services.filter((s) => s.id === id)[0])

    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    return (
        <div className="col align-items-start text-start">
            <div className="btn text-start d-flex align-items-start border border-primary rounded-4 rounded-bottom-0 p-3 w-100" onClick={handleShowModal}>
                <div className="text-center">
                    <img src={service.provider.photo_url === null ? "src/assets/img/default_user.jpg" : service.provider.photo_url} width="50" className="rounded-5 border border-dark"
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "src/assets/img/default_user.jpg";
                        }} />
                    {/* <p className="my-0">x/5</p> cambiar por service.rating cuando lo tengamos
                    <i className="bi bi-star-fill text-warning"></i> */}
                </div>
                <div className="ms-2 inline-limit">
                    <h3 className="fw-bold mb-0 fs-5 inline-limit">{service.title}</h3>
                    <p className="fw-semibold mb-0 fs-6 inline-limit">{service.provider.name}</p>
                    <p className="badge rounded-pill border border-primary text-primary mb-0">{service.category}</p>
                    <p className="fw-semibold mb-0 fs-6 inline-limit">{starsVisual(4)}</p> {/* cambiar por service.rating cuando lo tengamos */}
                    {/* <p className="mb-0">{service.provider.phone}</p> */}
                </div>
            </div>
            <div className="d-flex text-bg-primary border-top-0 rounded-4 rounded-top-0 p-3 py-2 w-100">

                <p className="mb-0 ms-2 fw-bold pt-1">{service.price} $</p> {/* cambiar por service.distance cuando lo tengamos */}
                <Link className="ms-auto btn btn-light rounded-pill">Contratar</Link>
            </div>

            <Modal show={show} onHide={handleCloseModal} className="rounded-5">
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex align-items-center gap-3">
                        <img src={service.provider.photo_url === null ? "src/assets/img/default_user.jpg" : service.provider.photo_url} width="50" className="rounded-5 border border-dark"
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "src/assets/img/default_user.jpg";
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
        </div>
    )
}