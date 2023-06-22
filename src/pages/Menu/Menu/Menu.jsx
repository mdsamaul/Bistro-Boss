import menuImages from "../../../assets/menu/banner3.jpg";
import dessertImages from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImages from "../../../assets/menu/pizza-bg.jpg";
import saladImages from "../../../assets/menu/salad-bg.jpg";
import soupImages from "../../../assets/menu/soup-bg.jpg";
import ChefService from "../../../components/ChefService/ChefService.jsx";
import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle.jsx";
import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";
import useMenu from "../../../hooks/useMenu.jsx";
import MenuCategory from "../MenuCategory/MenuCategory.jsx";


const Menu = () => {
    const [menu] = useMenu([]);
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');



    return (
        <div>
            <HelmetTitle title='Bistro Boss | Menu'></HelmetTitle>
            <ChefService img={menuImages} heading="OUR MENU" details="Would you like to try a dish?"></ChefService>
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"></SectionTitle>

            <MenuCategory items={offered} routelink='offered'></MenuCategory>
            {/*  desserts section */}
            <MenuCategory title="DESSERTS" routelink='dessert' details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={dessertImages} items={dessert} ></MenuCategory>
            {/* pizza section */}
            <MenuCategory title="PIZZA" routelink='pizza' details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={pizzaImages} items={pizza} ></MenuCategory>
            {/* salad section */}
            <MenuCategory title="SALADS" routelink='salads' details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={saladImages} items={salad} ></MenuCategory>
            {/* soup section */}
            <MenuCategory title="SOUPS" routelink='soup' details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={soupImages} items={soup} ></MenuCategory>




        </div>
    );
};

export default Menu;