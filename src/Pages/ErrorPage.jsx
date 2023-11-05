import React from 'react';
import error from '../assets/image/error.jpg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-10'>
                <div className='text-center'>
                    <h1 className='text-red-500 text-4xl font-bold mb-2'>Ooopppps!</h1>
                    <img src={error} className='w-full h-1/2' alt="Error page" />
                    <p className='text-red-500 text-2xl font-semibold my-2'>The page is not found. Please try again!!</p>
                    <div>
                        <Link to='/'>
                            <button className="btn btn-secondary">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;