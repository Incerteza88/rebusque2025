import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(

        // Root Route: All navigation will start from here.
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

            <Route path="/" element={<Home />} />
        </Route>
    )
);