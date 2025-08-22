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
					<section className="col col-md-6 d-flex justify-content-center align-items-center flex-column">
						<RegisterForm isLoginType = {params.type == "login"}/>
					</section>

					<section className="col-md-6 d-none d-md-block mt-5">
						<img className="img-fluid" style={{ width: 500, height: "auto" }} src={coffeman} />
					</section>

				</div>

			</div>
		</>
	);
}; 