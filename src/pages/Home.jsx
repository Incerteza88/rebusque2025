import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { RegisterForm } from "../components/RegisterForm.jsx";
import coffeman from "../assets/img/hombrePC.jpg"
import { useNavigate, useParams } from "react-router-dom";



export const Home = () => {

	const params = useParams()
	const navigate = useNavigate()
	useEffect(()=>{
		if (params.type != "login" && params.type != "signup") {
			navigate("/")
		}
	}, [])

	return (
		<>
			<div className="container">

				<div className="row">
					<section className="col-6 d-flex justify-content-center align-items-center flex-column">
						<div className="col-12 ps-3">
							<h1 className="text-start mb-3">{params.type == "login" ? "Login" : "Sign Up"}</h1>
							<h6 className="text-start mb-3">Join top freelancers on Freelance</h6>
						</div>
						<RegisterForm isLoginType = {params.type == "login"}/>
					</section>

					<section className="col-6">
						<img style={{ width: 500, height: "auto" }} src={coffeman} />
					</section>

				</div>

			</div>
		</>
	);
}; 