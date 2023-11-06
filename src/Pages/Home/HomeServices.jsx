import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data)
            )
    }, [services])
    return (
        <div className='mt-12'>
            <div className='text-center mb-8'>
                <h3 className='text-4xl font-bold mb-2'>Our Services</h3>
                <p className='text-lg text-black font-semibold'>We are your local dog home boarding <br /> service giving you complete</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    services.slice(0, 4).map(service => <ServiceCart
                        service={service}
                        key={service._id}
                    ></ServiceCart>)
                }
            </div>
            <div className='flex justify-center items-center mt-5'>
                <Link to="/services">
                    <button className="btn btn-primary text-center">Show All Services</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;