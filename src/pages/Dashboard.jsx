import React from "react";
import { PanelSideBar } from "../components/panel-components/PanelSideBar"
import { PanelContent } from "../components/panel-components/PanelContent"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {

	const { store } = useGlobalReducer()
	const isLogin = store.authState === 1 || store.authState === 2
	// console.log(isLogin)
	const roleType = store.authState === 1 ? "cliente" : store.authState === 2 ? "proveedor" : null
	// console.log(roleType)

	const navigate = useNavigate()

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/auth/login")
		}
	}, [])



	return (
		<>
			{
				isLogin ? (
					<div className="container" >
						{roleType === "cliente" ? (<h1>Cliente</h1>) : (<h1>Proveedor</h1>)}
						<div className="px-3 pt-2 pb-5 row g-4">
							<PanelSideBar />
							<PanelContent />

						</div>
					</div >
				) : (
					<h1>No has iniciado sesión</h1>
				)}
		</>
	);
};

export default Dashboard;