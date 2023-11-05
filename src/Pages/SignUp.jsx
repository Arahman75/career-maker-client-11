import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import google from '../assets/image/google2.png';


const SignUp = () => {
    const { createUser, handleUpdateProfile, loginWithGoogle } = useContext(AuthContext);

    // const { createUser, loginWithGoogle, handleUpdateProfile } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        //validation

        if (password.length < 6) {
            toast("password should be at least 6 character.")
            return;
        }

        createUser(email, password)
            .then(result => {
                handleUpdateProfile(name, photo)
                    .then(result => {
                        toast('User create successfully');
                        // navigate('/')
                    })

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
                // navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please SignUp</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-gray-200 ">
                    <form onSubmit={handleSignUp} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-success">SignUp</button>
                        </div>
                        <div onClick={handleGoogleLogin} className='flex cursor-pointer'>
                            <button type='submit' className="btn btn-primary">
                                Login with google
                            </button>
                            <img src={google} className='w-12 h-12' alt="" />
                        </div>
                        <p className='text-center text-lg mt-4 font-bold'>Already have an account? Please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;