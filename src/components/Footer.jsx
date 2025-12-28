import { Link } from "react-router";
import logo from "../assets/ReBusque-logo.png";
import title from "../assets/ReBusque-title.png";

export const Footer = () => (
    <div className="border-top">
        <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
            <p className="col-md-4 mb-0 text-body-secondary">© 2025 ReBusque</p>
            <Link className="navbar-brand p-0" to="/">
                <img src={logo} alt="logo" height="40" />
                <img src={title} alt="title" height="30" className="ps-1" />
            </Link>
        </footer>
    </div>
);