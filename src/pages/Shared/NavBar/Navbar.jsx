import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider.jsx";
import profile from '../../../assets/icon/correct.png';
import useCart from "../../../hooks/useCart.jsx";

const Navbar = () => {
    const [, cart,] = useCart();
    // console.log('arafat', isLoading, cart, refetch);
    const { user, logOutUser } = useContext(AuthContext);
    const heandlerSingOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error));
    }
    // console.log(user);
    const NavOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>CONTACT US</Link></li>
        <li><Link to='/dashbord'>DASHBOARD</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/OurShop/salad'>Our Shop</Link></li>
        <li><Link to='/dashbord/mycart'>
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">+{cart?.length || 0}</span>

                <button className="btn"><FaShoppingCart /></button>

            </div>
        </Link></li>

        {
            user ? <><li><Link onClick={heandlerSingOut}>SIGN OUT</Link></li><li><Link> <img className="w-8 rounded-full " src={profile} /></Link></li></> : <> <li><Link to='/login'>SIGN IN</Link></li></>
        }



    </>


    return (
        <div className="navbar fixed z-50 text-white max-w-screen-xl bg-black bg-opacity-50">
            <div className="navbar-start ">
                <div className="dropdown absolute right-0 ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 -ml-[410px] p-2 w-[440px] shadow bg-base-100 rounded-box block">
                        {NavOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>

            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavOption}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;