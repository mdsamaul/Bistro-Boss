import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider.jsx";
import useCart from "../../../hooks/useCart.jsx";

const ChefRecipe = ({ recipeitem }) => {
    // console.log("recipeitem", recipeitem);
    // const {_id, name, image, price, email}=recipeitem;

    const [, , refetch] = useCart();
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handlerAddToCart = (item) => {
        // console.log(item._id);



        if (user && user.email) {
            const cartItem = { menuItemId: item._id, name, image, price, email: user.email };
            // console.log("samaul", orderItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log("samaul", data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire(
                            'Added in the cart!',
                            'You clicke!',
                            'success'
                           
                        )
                    }
                });



        }

        else {
            Swal.fire({
                title: 'Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now !'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }
    const { image, name, recipe, price } = recipeitem;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 relative">
                <img src={image} alt={name} className="rounded-xl" />

            </figure>
            <p className="absolute right-12 top-12 bg-slate-700 p-1 bg-opacity-80 rounded-md  text-white">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handlerAddToCart(recipeitem)} className="btn btn-outline duration-700 hover:text-yellow-400 hover:bg-black border-0 border-b-2 font-normal text-yellow-300">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;