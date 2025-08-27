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
      fullName: '',
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

      <form className=' me-5' onSubmit={sendData}>
        {!isLoginType && (<div className="mb-4 col-8">
          <label for="exampleInputEmail1" className="form-label">Full Name</label>
          <input
            name="fullName"
            value={inputs.fullName}
            onChange={handleChange}
            type="text" className="form-control" id="exampleInputFullName" placeholder='Full Name' required />
        </div>)}

        <div className="mb-4 col-8">
          <label for="exampleInputPassword1" className="form-label">Email</label>
          <input
            name="email"
            value={inputs.email}
            onChange={handleChange}
            type="email" className="form-control" id="exampleInputEmail1" placeholder='Email' required />
        </div>

        <div className="mb-4 col-8">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input
            name="password"
            value={inputs.password}
            onChange={handleChange}
            type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' required />
        </div>

        <div className="d-grid gap-2 col-12 mx-auto mb-3">
          <button type="submit" class="btn btn-success col-8">{isLoginType ? "Login" : "Sign up"}</button>
        </div>

        {isLoginType ?
          <Link to="/auth/signup">Create a new account</Link> :
          <Link to="/auth/login">Already have an account?</Link>
        }

      </form>

    </div>

  )
}
