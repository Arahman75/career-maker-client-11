import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllServiceCart from './AllServiceCart';


const Services = () => {
    const services = useLoaderData();

    return (
        <div className='mt-12'>
            <h3 className='text-center text-4xl font-bold mb-4'>Show Our All Services</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    services?.map(service => <AllServiceCart
                        service={service}
                        key={service?._id}
                    ></AllServiceCart>)
                }
            </div>
            <div className='flex justify-center items-center mt-5'>
                <Link to="/">
                    <button className="btn btn-primary text-center">Show More</button></Link>
            </div>
        </div>
    );
};

export default Services;