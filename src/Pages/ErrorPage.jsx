import React from 'react';
import error from '../assets/image/error.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center my-10'>
                <div className='text-center'>
                    <h1 className='text-red-500 text-4xl font-bold mb-2'>Ooopppps!</h1>
                    <img src={error} className='w-full h-1/2' alt="Error page" />
                    <p className='text-red-500 text-2xl font-semibold my-2'>Sorry, an unexpected error has occurred.</p>
                    <div>
                        <Link to='/'>
                            <button className="btn btn-secondary">Go Back</button>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;