import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer.jsx";
import Navbar from "../pages/Shared/NavBar/Navbar.jsx";

const Main = () => {
    const location = useLocation();
    const currountLocation = location.pathname.includes('login');

    return (
        <div>
            {currountLocation || <Navbar></Navbar>}
            <Outlet></Outlet>
            {currountLocation || <Footer></Footer>}
        </div>
    );
};

export default Main;