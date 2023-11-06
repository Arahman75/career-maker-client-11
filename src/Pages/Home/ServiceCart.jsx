import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { img, name, price, description, _id } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='h-64 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <h3 className='text-xl font-semibold'>Price : ${price}</h3>
                <div className='flex items-center'>
                    <img src={user?.photoURL} alt="user-img" className='w-16 h-16 rounded-full mr-4' />
                    <h3 className='text-xl font-bold'>{user?.displayName}</h3>
                </div>
                <p className='text-lg'>{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/service-detail/${_id}`}>
                        <button className="btn btn-primary">View Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;