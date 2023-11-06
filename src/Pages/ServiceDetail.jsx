import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ServiceDetail = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData({});
    console.log(service);
    return (
        <div className='mt-6'>
            <h3 className='text-center text-4xl font-bold mb-4'>Service Details of : {service.name}</h3>
            <div className=''>
                <h3 className='text-center text-2xl font-bold mb-4 pt-4'>Service Provider Name : {user?.displayName}</h3>
                <div className='flex justify-center items-center mb-4'>
                    <img src={user?.photoURL} alt="user-img" className='w-24 h-24 rounded-lg mr-4' />
                    <h3 className='text-xl font-semibold'>Location : {service?.serviceArea || 'Bangladesh'}</h3>
                </div>

            </div>

            <div className="card card-compact bg-base-100 shadow-xl w-1/2 mx-auto">
                <figure><img src={service.img} alt="Shoes" className='h-80 w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">Service Name : {service.name}</h2>
                    <h3 className='text-xl font-semibold'>Price : ${service.price}</h3>
                    <div className='flex items-center'>
                        <img src={user?.photoURL} alt="user-img" className='w-16 h-16 rounded-full mr-4' />
                        <h3 className='text-xl font-bold'>{user?.displayName}</h3>
                    </div>
                    <p className='text-lg'>{service.description}</p>
                    <div className="card-actions justify-center">
                        <Link>
                            <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;