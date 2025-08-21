import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../services/fetch';

export const RegisterForm = ({ isLoginType }) => {

  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    password: ''
  });

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

  return (
    <div className='container'>

      <form className=' me-5 w-50' onSubmit={sendData}>

        <div className="row g-3">
      
          <div className="col-6">
          
            <label className="card p-3 bg-primary text-white position-relative">
              <div className="d-flex justify-content-between">
                <i className="bi bi-person fs-2 text-white"></i>
                <input type="radio" className="form-check-input" name="user_type" value="cliente" />
              </div>
              <div className="mt-3">
                <small>Soy un cliente que necesita un servicio realizado por un profesional.</small>
              </div>
            </label>
          </div>

          <div className="col-6">
            <label className="card p-3 bg-primary text-white position-relative">
              <div className="d-flex justify-content-between">
                <i className="bi bi-briefcase fs-2"></i>
                <input type="radio" className="form-check-input" name="user_type" value="profesional" />
              </div>
              <div className="mt-3">
                <small>Soy un profesional independiente que busca visibilidad.</small>
              </div>
            </label>
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
    <select
      className="form-select bg-primary text-white rounded-start-pill border-primary"
      style={{ maxWidth: "90px" }}
      defaultValue="+57"
    >
      <option value="+57">+57</option>
      <option value="+34">+34</option>
      <option value="+1">+1</option>
    </select>
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
          <button type="submit" className="btn btn-primary rounded-pill">{isLoginType ? "Iniciar sesión" : "Registrarse"}</button>
        </div>

        {isLoginType ?
          <p>¿Todavía no tienes cuenta? <Link to="/auth/signup">Regístrate</Link></p> :

          <p>¿Ya tienes cuenta? <Link to="/auth/login">Inicia Sesión</Link></p>
        }

      </form>

    </div >

  )
}
