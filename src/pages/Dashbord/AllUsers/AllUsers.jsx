import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();

    });

    const handlerItemDelete = () => {
        <></>
    }

    const handlerMakeAdmin = (user) => {

        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data);
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} id a new admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            {users.length}
            <div className="overflow-x-auto w-full">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === 'admin' ? 'admin' : <button onClick={() => handlerMakeAdmin(user)} className="btn btn-ghost bg-red-600"><FaUserShield className='text-xl'></FaUserShield></button>
                                }</td>
                                <td>
                                    <button onClick={() => handlerItemDelete(user)} className="btn btn-ghost bg-red-600"><FaTrashAlt className='text-xl'></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;