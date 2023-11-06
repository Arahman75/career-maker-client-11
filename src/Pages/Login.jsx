import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../assets/image/google2.png';

const Login = () => {
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast('User login successfully')
                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                toast('User login successfully');
                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-gray-200 ">
                    <form onSubmit={handleSignIn} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-success">Login</button>
                        </div>
                        <div onClick={handleGoogleLogin} className='flex cursor-pointer'>
                            <button type='submit' className="btn btn-primary">
                                Login with google
                            </button>
                            <img src={google} className='w-12 h-12' alt="" />
                        </div>
                        <p className='text-center text-lg mt-4 font-bold'>Are you new Pet sitting and walking? Please <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;