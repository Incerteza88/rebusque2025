// src/pages/Dashboard.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { PanelSideBar } from "../components/panel-components/PanelSideBar";
import { PanelContent } from "../components/panel-components/PanelContent";

const Dashboard = () => {
  const { store } = useGlobalReducer();
  const isLogin = store.isLogin;
  const roleType = store.isAuth?.role;

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <>
      {isLogin ? (
        <div className="container">
          {roleType === "cliente" ? <h1>Cliente</h1> : <h1>Proveedor</h1>}
          <div className="px-3 pt-2 pb-5 row g-4">
            <PanelSideBar />
            <PanelContent />
          </div>
        </div>
      ) : (
        <h1>No has iniciado sesión</h1>
      )}
    </>
  );
};

export default Dashboard;
