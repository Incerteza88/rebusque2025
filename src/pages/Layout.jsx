import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { validAuth } from "../services/generalServices"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Layout = () => {

    const { store, dispatch } = useGlobalReducer()

    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    // llamamos a validAuth para que le indica a toda la aplicacion si seguimos logueados

    useEffect(() => {
        if (localStorage.getItem("token") != null) {
            validAuth().then((value) => {
                if (value.ok) {
                    value.json().then((data) => {
                        if (data.logged && data.role === "cliente") {
                            // console.log("Se ha logueado un cliente");

                            dispatch({ type: 'LOGIN_USER' })
                        } else if (data.logged && data.role === "proveedor") {
                            // console.log("Se ha logueado un proveedor");

                            dispatch({ type: 'LOGIN_WORKER' })
                        }
                    })

                } else {
                    handleShowModal()
                    dispatch({ type: 'LOGOUT' })
                }
            })
        }
    }, [])

    return (
        <ScrollToTop>
            <Modal show={show} onHide={handleCloseModal} className="rounded-5">
                <Modal.Header closeButton>
                    <Modal.Title>La sesión ha expirado</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Quieres volver a iniciar sesión?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseModal} className="rounded-pill">
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal} className="rounded-pill" href="/auth/login">
                        Volver a iniciar sesión
                    </Button>
                </Modal.Footer>
            </Modal>
            <Navbar />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}