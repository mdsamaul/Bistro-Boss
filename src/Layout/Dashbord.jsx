import { FaAmazonPay, FaCalendarAlt, FaHome, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from "react-router-dom";
import HelmetTitle from '../components/HelmetTitle/HelmetTitle.jsx';
import useCart from '../hooks/useCart.jsx';
const Dashbord = () => {
    const [, cart,] = useCart();
    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <HelmetTitle title='Bistro Boss | Dashbord'></HelmetTitle>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-black">
                    {/* <!-- Sidebar content here --> */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='dashbord/home'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='dashbord/reservation'><FaCalendarAlt /> ADD ITEMS</NavLink></li>
                            <li><NavLink to='dashbord/history'><FaAmazonPay />MANAGE IREMS</NavLink></li>
                            <li><NavLink to='dashbord/history'><FaAmazonPay />MANAGE BOOKINGS</NavLink></li>
                            <li><NavLink to='/dashbord/alluser'><FaAmazonPay />ALL USERS</NavLink></li>


                        </> : <>
                            <li><NavLink to='dashbord/home'><FaHome /> User Home</NavLink></li>
                            <li><NavLink to='dashbord/reservation'><FaCalendarAlt /> Reservations</NavLink></li>
                            <li><NavLink to='dashbord/history'><FaAmazonPay />Payment History</NavLink></li>
                            <li><NavLink to='/dashbord/mycart'><FaShoppingCart />My Cart <span className="indicator-item badge badge-secondary text-end">+{cart?.length || 0}</span></NavLink>
                            </li>

                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> User Home</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashbord;