import { Link } from "react-router";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { starsVisual } from "../services/generalServices";
import defaultPhoto from "../assets/img/default_user.jpg"
import { addWork } from "../services/fetch";

export const ServiceCard = ({ id }) => {

    const { store, dispatch } = useGlobalReducer()

    const [service, setService] = store.services.length > 0 ? useState(store.services.filter((s) => s.id === id)[0]) : useState({
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
    const [success, setSuccess] = useState("");

    const holdOn = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    async function handleAddWork(service_id) {
        addWork(service_id).then(async (response) => {
            if (response.status === 201) {
                setSuccess("¡Trabajo agregado con éxito!");
                await holdOn(3000);
                setSuccess("");
                handleCloseModal();
            } else {
                setSuccess("Error al agregar el trabajo");
            }
        });
    }

    return (
        <div className="col align-items-start text-start" >
            <div className="btn text-start d-flex align-items-start border border-primary rounded-4 rounded-bottom-0 p-3 w-100" onClick={handleShowModal}>
                <div className="text-center">
                    <img src={service.provider.photo_url === null ? defaultPhoto : service.provider.photo_url} width="50" className="rounded-5 border border-dark"
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = defaultPhoto;
                        }} />
                </div>
                <div className="ms-2 inline-limit">
                    <h3 className="fw-bold mb-0 fs-5 inline-limit">{service.title}</h3>
                    <p className="fw-semibold mb-0 fs-6 inline-limit">{service.provider.name}</p>
                    <p className="badge rounded-pill border border-primary text-primary mb-0">{service.category}</p>
                    <p className="fw-semibold mb-0 fs-6 inline-limit">{starsVisual(parseFloat(service.provider.average_rating))}</p>
                </div>
            </div>
            <div className="d-flex btn text-bg-primary border-top-0 rounded-4 rounded-top-0 p-3 py-2 w-100" onClick={handleShowModal}>

                <p className="mb-0 ms-2 fw-bold pt-1">{service.price} $</p> {/* cambiar por service.distance cuando lo tengamos */}
                <Link className="ms-auto btn btn-light rounded-pill" onClick={handleShowModal}>Contratar</Link>
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
                    <p className="me-auto">{success}</p>
                    <Button variant="danger" onClick={handleCloseModal} className="rounded-pill">
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => { handleAddWork(service.id) }} className="rounded-pill">
                        Contratar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}