// src/pages/Dashboard.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { PanelSideBar } from "../components/panel-components/PanelSideBar";
import { PanelContent } from "../components/panel-components/PanelContent";
import { getWorks } from "../services/fetch";

const Dashboard = () => {
  const { store, dispatch } = useGlobalReducer();
  const isLogin = store.authState === 1 || store.authState === 2

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/auth/login")
    }

    getWorks().then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          dispatch({ type: "setMyWorks", payload: data })
          console.log(data);
        })
      }
    })
  }, [])

  return (
    <div className="container mt-5">
      {isLogin ? (

        <div className="px-3 pt-2 pb-5 row g-4">
          <PanelSideBar />
          <PanelContent />

        </div>
      ) : (
        <h1>No has iniciado sesión</h1>
      )}
    </div>
  );
};

export default Dashboard;
