import { Outlet } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { validAuth } from "../services/generalServices"
// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {


    // llamamos a validAuth para que le indica a toda la aplicacion si seguimos logueados
    // useEffect(() => {
    //     validAuth().then((value) => { if (value) { dispatch({ type: 'LOGIN' }) } else { localStorage.removeItem("token"); dispatch({ type: "LOGOUT" }) } })

    // }, [])

    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}