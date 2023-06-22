import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle.jsx";
import BistroBoos from "../../Shared/BistroBoos/BistroBoos.jsx";
import Banner from "../Banner/Banner.jsx";
import CallNow from "../CallNow/CallNow.jsx";
import Category from "../Category/Category.jsx";
import ChefRecommends from "../ChefRecommends/ChefRecommends.jsx";
import Featured from "../Featured/Featured.jsx";
import PopularMenu from "../PopularMenu/PopularMenu.jsx";
import TestMonials from "../TestMonials/TestMonials.jsx";

const Home = () => {
    return (
        <div>
            <HelmetTitle title='Bistro Boss | Home'></HelmetTitle>
            <Banner></Banner>
            <Category></Category>
            <BistroBoos></BistroBoos>
            <PopularMenu></PopularMenu>
            <CallNow></CallNow>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <TestMonials></TestMonials>
        </div>
    );
};

export default Home;