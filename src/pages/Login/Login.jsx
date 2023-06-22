import { useContext, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider.jsx';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    // console.log("samaul form", from, "location", location);
    const [disabled, setDisabled] = useState(true)
    const { loginUser } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handlerLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const loggegUser = result.user;
                console.log(loggegUser);
                
                    

                Swal.fire({
                    title: 'LogIn Successfuly',

                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'

                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }

                });
                navigate(from, { replace: true });

            })




    }
    const handlerSetCaptcha = (e) => {
        // const load_user_captcha = captcharef.current.value;
        const captchar = e.target.value;

        // console.log(captchar);
        if (validateCaptcha(captchar, false) == true) {
            // console.log('Captcha Matched');
            setDisabled(false)
        }

        else {
            // console.log('Captcha Does Not Match');
            setDisabled(true);
        }


    }
    return (
        <div className="hero md:my-10 bg-base-200">
            <div className="hero-content my-10 flex-col md:px-20 lg:flex-row-reverse">
                <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body w-full">
                        <form onSubmit={handlerLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onChange={handlerSetCaptcha} type="text" name="captcha" placeholder="type tha capcha" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" disabled={disabled} value="Login" />
                            </div>
                        </form>
                        <div className='text-center'>
                            <div>
                                <p><small className='text-orange-400'>New here? <Link to='/singup' className='text-orange-500 font-bold'>Create a New Account</Link></small></p>
                                <p className='py-2'> Or sign in with</p>
                            </div>
                            <div className='py-5 flex justify-center px-3 gap-7'>
                                <label className=" text-4xl">

                                    <div className="border rounded-full p-2 hover:text-black flex justify-center items-center hover:bg-white duration-500">
                                        <button><FaFacebookF /></button>
                                    </div>

                                </label>
                                <label className="text-4xl">

                                    <div className="border rounded-full p-2 hover:text-black flex justify-center items-center hover:bg-white duration-500">
                                        <button><FcGoogle /></button>
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
                <div className="text-center lg:text-left  w-full md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

            </div>
        </div>
    );
};

export default Login;