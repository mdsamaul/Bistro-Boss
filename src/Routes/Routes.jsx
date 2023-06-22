import {
    createBrowserRouter
} from "react-router-dom";
import Dashbord from "../Layout/Dashbord.jsx";
import Main from "../Layout/Main.jsx";
import SingUp from "../SingUp/SingUp.jsx";
import AllUsers from "../pages/Dashbord/AllUsers/AllUsers.jsx";
import MyCart from "../pages/Dashbord/MyCart/MyCart.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Menu from "../pages/Menu/Menu/Menu.jsx";
import OurShop from "../pages/OurShop/OurShop/OurShop.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            }, {
                path: 'ourshop/:category',
                element: <OurShop></OurShop>
            }, {
                path: 'login',
                element: <Login></Login>
            }, {
                path: 'singup',
                element: <SingUp></SingUp>
            }
        ]

    }, {
        path: 'dashbord',
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'alluser',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);


