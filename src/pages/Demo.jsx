import { Link } from "react-router-dom";
export const Demo = () => {

  return (
    <div className="container text-center mt-5">
      <h1>Bienvenido a Rebusque - 2025</h1>
      <Link to="/auth/login" className="btn btn-primary">
        Iniciar sesión
      </Link>
      <Link to="/auth/signup" className="btn btn-secondary ms-2">
        Registrarse
      </Link>
    </div>
  );
};
