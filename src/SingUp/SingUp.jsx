
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider.jsx';
const SingUp = () => {
    const { createANewUser, updateUserProfile, signinWithGoogle } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const onSubmit = data => {
        // console.log(data)
        createANewUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log("logged user", loggedUser);
                updateUserProfile(data.name, data.purl)

                    .then(() => {
                        const saveUser = {
                            name: data.name, photoURL: data.purl
                        }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => console.log(data))
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })

            })


    };
    const googleSing = () => {
        signinWithGoogle()
            .then((result) => {
                const user = result.user;

                const saveUser = {
                    name: user.displayName, email: user.email
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })

                    .then(() => navigate(from, { replace: true }))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero py-20  bg-base-200">
            <div className="hero-content flex-col mt-16 lg:w-[80%] lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="card-body">
                            <div>
                                <h2 className='text-center text-5xl font-bold'>Sing Up</h2>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  {...register("name", { required: true })} type="text" name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span>name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Link</span>
                                </label>
                                <input  {...register("purl", { required: true })} type="text" name='purl' placeholder="Profile Link" className="input input-bordered" />
                                {errors.name && <span>name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </form>
                    <div className='text-center'>
                        <div>
                            <p><small className='text-orange-400'>New here? <Link to='/login' className='text-orange-500 font-bold'>Already registered?</Link></small></p>
                            <p className='my-2'>  Go to log in</p>
                        </div>
                        <div className='py-5 flex justify-center px-3 gap-7'>
                            <label className=" text-4xl">

                                <div className="border rounded-full p-2 hover:text-black flex justify-center items-center hover:bg-white duration-500">
                                    <button><FaFacebookF /></button>
                                </div>

                            </label>
                            <label className="text-4xl">

                                <div className="border rounded-full p-2 hover:text-black flex justify-center items-center hover:bg-white duration-500">
                                    <button onClick={googleSing}><FcGoogle /></button>
                                </div>

                            </label>
                            <label className="text-4xl">

                                <div className="border rounded-full p-2 hover:text-black flex justify-center items-center hover:bg-white duration-500">
                                    <button><AiFillGithub /></button>
                                </div>

                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;