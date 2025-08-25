// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Single } from "./pages/Single";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter(
    createRoutesFromElements(
   
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        <Route path= "/" element={<Home />} />
        <Route path= "/auth/:type" element={<Login />} />
        <Route path= "/auth/dashboard" element={<Dashboard/>} />
      </Route>
    )
);