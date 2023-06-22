import { Link } from "react-router-dom";
import ChefService from "../../../components/ChefService/ChefService.jsx";
import MenuItems from "../../Shared/MenuItems/MenuItems.jsx";

const MenuCategory = ({ items, img, title, details, routelink }) => {

    return (
        <div className="py-6">
            {
                title && <ChefService
                    img={img}
                    heading={title}
                    details={details}
                ></ChefService>
            }
            <div className='grid md:grid-cols-2 gap-10 my-10 pt-10'>
                {
                    items.map(item => <MenuItems key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </div>
            <div className="w-full text-center">
                <Link to={`/OurShop/${routelink}`}>
                    <button className="btn btn-outline duration-700 hover:text-yellow-400 hover:bg-black border-0 border-b-2 font-normal text-yellow-300">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;