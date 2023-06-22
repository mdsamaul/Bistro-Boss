import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle.jsx";
import useCart from "../../../hooks/useCart.jsx";

const MyCart = () => {
    const [, cart, refetch] = useCart();

    // console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handlerItemDelete = (item) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`,
                    {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            fetch()
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        // console.log(data)
                    })
            }
        })


    }
    return (
        <div className="w-[90%] mx-auto">
            <HelmetTitle title='Bistro Boss | MyCart'></HelmetTitle>

            <div className=" ">
                <div className="flex justify-evenly items-center py-10">
                    <h2 className="text-3xl font-semibold">Total Cart : {cart.length}</h2>
                    <h2 className="text-3xl font-semibold">Total Price : {total}</h2>
                    <button className="btn btn-warning btn-sm">PAY</button>
                </div>

                <div className="divider"></div>
                <div className="w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Images</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-semibold">{item.name}</div>

                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-right">{item.price}</div></td>
                                        <td>
                                            <button onClick={() => handlerItemDelete(item)} className="btn btn-ghost bg-red-600"><FaTrashAlt className='text-xl'></FaTrashAlt></button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;