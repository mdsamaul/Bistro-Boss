import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import shopImages from "../../../assets/shop/banner2.jpg";
import ChefService from "../../../components/ChefService/ChefService.jsx";
import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle.jsx";
import useMenu from "../../../hooks/useMenu.jsx";
import ChefRecipe from "../../Shared/ChefRecipe/ChefRecipe.jsx";

const OurShop = () => {
    const [menu] = useMenu([]);
    const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
    const { category } = useParams();
    const inialIndexing = categorys.indexOf(category)


    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");


    const [tabIndex, setTabIndex] = useState(inialIndexing);
    return (
        <div>
            <HelmetTitle title='Bistro Boss | Our Shop'></HelmetTitle>
            <ChefService img={shopImages} heading="OUR SHOP" details="Would you like to try a dish?"></ChefService>

            <div className="my-10 text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                salad.map(item => <ChefRecipe key={item._id} recipeitem={item} ></ChefRecipe>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                pizza.map(item => <ChefRecipe key={item._id} recipeitem={item} ></ChefRecipe>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                soup.map(item => <ChefRecipe key={item._id} recipeitem={item} ></ChefRecipe>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                dessert.map(item => <ChefRecipe key={item._id} recipeitem={item} ></ChefRecipe>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                drinks.map(item => <ChefRecipe key={item._id} recipeitem={item} ></ChefRecipe>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;