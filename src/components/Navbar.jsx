import { Link, useLocation, useNavigate } from "react-router";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";
import logo from "../assets/Rebusque-logo.png";
import title from "../assets/Rebusque-title.png";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer()

    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate()

    const location = useLocation();

    const [showConfirm, setShowConfirm] = useState(false);

    const user = JSON.parse(localStorage.getItem("isAuth")) ? JSON.parse(localStorage.getItem("isAuth")) : null
    const userImage = user ? user.photo_url : null
    const userName = user ? user.name : ""
    const userLastName = user ? user.last_name : ""

    async function handleSubmit(e) {
        e.preventDefault()

        dispatch({ type: 'searchThis', payload: searchValue })

        navigate("/discover")

    }

    const profileDrop = store.authState === 0 ?

        location.pathname === "/auth/login" || location.pathname === "/auth/signup" ? "" :

            <div className="lead d-flex">
                <Link className="btn btn-outline-primary rounded-5 me-1 text-nowrap" to="/auth/login">Iniciar Sesión</Link>
                <Link className="btn btn-outline-primary rounded-5 ms-1 text-nowrap" to="/auth/signup">Registrarse</Link>
            </div>
        :
        <div>
            <button className="btn btn-primary rounded-5 dropdown-toggle py-0 ps-0" href="#" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-expanded="false">
                <img src={userImage}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "src/assets/img/default_user.jpg";
                    }}
                    width="40" height="40" className="rounded-5 me-1"
                />
            </button>

            {/* <ul className="dropdown-menu dropdown-menu-end py-0">
                <li><Link className="dropdown-item mt-2" to="/auth/dashboard">{store.authState === 1 ? "Panel del usuario" : "Panel del trabajador"}</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item pt-2" to="#">{store.authState === 1 ? "Mis pedidos" : "Mis trabajos"}</Link></li>
                <li><Link className="dropdown-item pt-2" to="#">Mi perfil</Link></li>
                <li><Link className="dropdown-item pt-2" to="#">Mensajes</Link></li>
                <li><Link className="dropdown-item pt-2" to="#">Notificaciones</Link></li>
                <li><hr className="dropdown-divider mb-0" /></li>
                <li><span className="btn btn-danger w-100 rounded-top-0 py-2 ps-3 text-start" onClick={() => setShowConfirm(true)}>Cerrar sesión</span></li>

            </ul> */}

            {showConfirm && (
                <div
                    className="modal fade show"
                    style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
                    tabIndex="-1"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cerrar Sesión</h5>
                                <button type="button" className="btn-close" onClick={() => setShowConfirm(false)}></button>
                            </div>
                            <div className="modal-body text-start">
                                <p>¿Está seguro de que quiere cerrar la sesión?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary rounded-pill" onClick={() => setShowConfirm(false)}>
                                    Cancelar
                                </button>
                                <button type="button" className="btn btn-danger rounded-pill" onClick={() => { setShowConfirm(false); dispatch({ type: "LOGOUT" }); navigate("/") }}>
                                    Sí, salir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    const searchBar = location.pathname === "/discover" ? "" : location.pathname === "/" ? "" :
        <form className="d-flex mb-2 mb-lg-0" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2 rounded-5" type="search" placeholder="Buscar" aria-label="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button className="btn btn-dark rounded-5 me-2" type="submit">Buscar</button>
        </form>

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand p-0" to="/">
                        <img src={logo} alt="logo" height="40" />
                        <img src={title} alt="title" height="30" className="ps-1" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/discover">Descubre</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="#contact">Contacto</Link>
                            </li>
                        </ul>
                        {searchBar}
                        <li className="nav-link dropdown text-end">
                            {profileDrop}
                        </li>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end text-bg-primary" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title d-flex w-100" id="offcanvasExampleLabel">
                        <img src={userImage === null ? "src/assets/img/default_user.jpg" : userImage} width="60" height="60" className="rounded-5 border border-dark"
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "src/assets/img/default_user.jpg";
                            }} />
                        <div className="ms-2 inline-limit">
                            {userName}
                            <p className="fw-semibold mb-0 fs-6 inline-limit">{userLastName}</p>
                        </div>
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </h5>
                </div>
                <div className="offcanvas-body">
                    <ul className="py-0" style={{ listStyleType: "none" }}>
                        <li>
                            <Link className="btn btn-outline-light border-0 m-2 p-2 w-100 text-start" to="/auth/dashboard" data-bs-dismiss="offcanvas">
                                {store.authState === 1 ? "Panel del usuario" : "Panel del trabajador"}
                            </Link>
                        </li>
                        <li><hr className="m-2" /></li>
                        <li><Link className="btn btn-outline-light border-0 m-2 p-2 w-100 text-start" to="#" data-bs-dismiss="offcanvas" >{store.authState === 1 ? "Mis pedidos" : "Mis trabajos"}</Link></li>
                        <li><Link className="btn btn-outline-light border-0 m-2 p-2 w-100 text-start" to="#" data-bs-dismiss="offcanvas" >Mi perfil</Link></li>
                        <li><Link className="btn btn-outline-light border-0 m-2 p-2 w-100 text-start" to="#" data-bs-dismiss="offcanvas" >Mensajes</Link></li>
                        <li><Link className="btn btn-outline-light border-0 m-2 p-2 w-100 text-start" to="#" data-bs-dismiss="offcanvas" >Notificaciones</Link></li>
                        <li><hr className="m-2" /></li>
                        <li><span className="btn btn-outline-danger border-0 m-2 p-2 w-100 text-start" onClick={() => setShowConfirm(true)}>Cerrar sesión</span></li>

                    </ul>
                </div>
            </div>
        </>
    );
};