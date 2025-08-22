import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../services/fetch';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

export const RegisterForm = ({ isLoginType }) => {

  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [numberPrefix, setNumberPrefix] = useState("+57")

  function sendData(e) {
    e.preventDefault()
    if (isLoginType) {
      auth(inputs, "login").then(data => {
        console.log("login info ", data)
      })
    } else {
      auth(inputs, "register").then(data => {
        console.log("login info ", data)
      })
    }
    setInputs({
      nombre: '',
      apellidos: '',
      telefono: '',
      email: '',
      password: ''
    })
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value })
  }

  const choosePrefix = (e) => {
    setNumberPrefix(e.target.name)
  }

  return (
    <div className='container d-flex justify-content-center'>

      <form className='w-100 rounded bg-white mx-auto'
        style={{ maxWidth: "400px" }}
        onSubmit={sendData}>

        <h1 className="mb-4 text-start" style={{ color: "#000" }}>
          {isLoginType ? "Iniciar sesión" : "Registrarse"}
        </h1>

        <div className="row g-3 mb-2">

          <div className="col col-lg-6" >

            {!isLoginType ?

              <label className="card p-3  text-white position-relative" style={{ backgroundColor: "#004aad", borderColor: "#004aad", color: "#fff" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <i className="bi bi-person fs-2 text-white"></i>
                  <input type="radio" className="form-check-input radio-register" name="user_type" value="cliente" />
                </div>


                <div className="mt-3">
                  <small>Soy un cliente que necesita un servicio realizado por un profesional.</small>
                </div>
              </label> :
              <div>
                <button
                  className="btn rounded-pill w-100"
                  style={{ color: "#004aad", border: "solid 1px #004aad" }}
                >
                  <input
                    type="radio"
                    className="form-check-input me-3 radio-login"
                    style={{ accentColor: "#004aad" }}
                    name="user_type"
                    value="cliente"
                  />
                  Soy cliente
                </button>
              </div>
            }

          </div>

          <div className="col col-lg-6">

            {!isLoginType ?
              <label className="card p-3 text-white position-relative h-100" style={{ backgroundColor: "#004aad", borderColor: "#004aad", color: "#fff" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <i className="bi bi-briefcase fs-2"></i>
                  <input type="radio" className="form-check-input radio-register" name="user_type" value="profesional" />
                </div>
                <div className="mt-3">
                  <small>Soy un profesional independiente que busca visibilidad.</small>
                </div>
              </label> :
              <button className='btn rounded-pill w-100' style={{ color: "#004aad", border: "solid 1px #004aad" }}><input type="radio" className="form-check-input me-3 radio-login" name="user_type" value="cliente" />Soy profesional</button>
            }

          </div>
        </div>

        {!isLoginType &&

          (<>
            <div className="mb-4">
              <label for="exampleInputName1" className="form-label mt-3">Nombre</label>
              <input
                name="nombre"
                value={inputs.nombre}
                onChange={handleChange}
                type="text" className="form-control rounded-pill" id="exampleInputName" placeholder='Nombre' required />
            </div>

            <div className="mb-4">
              <label for="exampleInputApellidos1" className="form-label">Apellidos</label>
              <input
                name="apellidos"
                value={inputs.apellidos}
                onChange={handleChange}
                type="text" className="form-control rounded-pill" id="exampleInputApellidos1" placeholder='Apellidos' required />
            </div>

            <div className="mb-4">
              <label htmlFor="exampleInputTelefono1" className="form-label">Teléfono</label>
              <div className="input-group">

                <div className="dropdown custom-dropdown dropdown text-white rounded-start-pill border-primary d-flex align-items-center" style={{ backgroundColor: "#004aad", borderColor: "#004aad", color: "#fff" }}>
                  <a className="btn  dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{numberPrefix}
                  </a>

                  <ul className="dropdown-menu overflow-auto" style={{ maxWidth: "90px", maxHeight: "150px" }}>
                    <li><a className="dropdown-item" href="#" name="+57" onClick={choosePrefix}>+57 - Colombia</a></li>
                    <li><a className="dropdown-item" href="#" name="+34" onClick={choosePrefix}>+34 - España</a></li>
                    <li><a className="dropdown-item" href="#" name="+52" onClick={choosePrefix}>+52 - México</a></li>
                    <li><a className="dropdown-item" href="#" name="+55" onClick={choosePrefix}>+55 - Brasil</a></li>
                    <li><a className="dropdown-item" href="#" name="+54" onClick={choosePrefix}>+54 - Argentina</a></li>
                    <li><a className="dropdown-item" href="#" name="+56" onClick={choosePrefix}>+56 - Chile</a></li>
                    <li><a className="dropdown-item" href="#" name="+51" onClick={choosePrefix}>+51 - Perú</a></li>
                    <li><a className="dropdown-item" href="#" name="+593" onClick={choosePrefix}>+593 - Ecuador</a></li>
                    <li><a className="dropdown-item" href="#" name="+58" onClick={choosePrefix}>+58 - Venezuela</a></li>
                    <li><a className="dropdown-item" href="#" name="+595" onClick={choosePrefix}>+595 - Paraguay</a></li>
                    <li><a className="dropdown-item" href="#" name="+598" onClick={choosePrefix}>+598 - Uruguay</a></li>
                    <li><a className="dropdown-item" href="#" name="+591" onClick={choosePrefix}>+591 - Bolivia</a></li>
                    <li><a className="dropdown-item" href="#" name="+502" onClick={choosePrefix}>+502 - Guatemala</a></li>
                    <li><a className="dropdown-item" href="#" name="+503" onClick={choosePrefix}>+503 - El Salvador</a></li>
                    <li><a className="dropdown-item" href="#" name="+504" onClick={choosePrefix}>+504 - Honduras</a></li>
                    <li><a className="dropdown-item" href="#" name="+505" onClick={choosePrefix}>+505 - Nicaragua</a></li>
                    <li><a className="dropdown-item" href="#" name="+506" onClick={choosePrefix}>+506 - Costa Rica</a></li>
                    <li><a className="dropdown-item" href="#" name="+507" onClick={choosePrefix}>+507 - Panamá</a></li>
                    <li><a className="dropdown-item" href="#" name="+53" onClick={choosePrefix}>+53 - Cuba</a></li>
                    <li><a className="dropdown-item" href="#" name="+1" onClick={choosePrefix}>+1 - República Dominicana</a></li>
                  </ul>

                  <p id="selected"></p>

                </div>

                <input
                  name="telefono"
                  value={inputs.telefono}
                  onChange={handleChange}
                  type="text"
                  className="form-control rounded-end-pill"
                  id="exampleInputTelefono1"
                  placeholder="601 23456789"
                  required
                />
              </div>
            </div>

          </>
          )}

        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input
            name="email"
            value={inputs.email}
            onChange={handleChange}
            type="email" className="form-control rounded-pill" id="exampleInputEmail1" placeholder='alguien@dominio.com' required />
        </div>

        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input
            name="password"
            value={inputs.password}
            onChange={handleChange}
            type="password" className="form-control rounded-pill" id="exampleInputPassword1" placeholder='**********' required />
        </div>

        <div className="d-grid gap-2 mb-3">
          <button type="submit" className="btn rounded-pill" style={{ backgroundColor: "#004aad", borderColor: "#004aad", color: "#fff" }}>{isLoginType ? "Iniciar sesión" : "Registrarse"}</button>
        </div>

        {isLoginType ?
          <p>¿Todavía no tienes cuenta? <Link to="/auth/signup" style={{ fontWeight: "bold", color: "#004aad", textDecoration: "none" }}>Regístrate</Link></p> :

          <p>¿Ya tienes cuenta? <Link to="/auth/login" style={{ fontWeight: "bold", color: "#004aad", textDecoration: "none" }}>Inicia Sesión</Link></p>
        }

      </form>

    </div >

  )
}
