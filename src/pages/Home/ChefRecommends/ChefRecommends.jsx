import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";
import ChefRecipe from "../../Shared/ChefRecipe/ChefRecipe.jsx";


const ChefRecommends = () => {
    const [chefrecommend, setChefrecommend] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const saladrecipe = data.filter(item => item.category === 'salad');
                setChefrecommend(saladrecipe.slice(0, 3))
            })
    }, []);
    // console.log(chefrecommend);
    return (
        <div className="my-10">
            <SectionTitle subHeading={"Should Try"} heading={'CHEF RECOMMENDS'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    chefrecommend.map(recipeitem => <ChefRecipe key={recipeitem._id} recipeitem={recipeitem}></ChefRecipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;