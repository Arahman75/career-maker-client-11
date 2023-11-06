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
    }, [])
    return (
        <div className='mt-12'>
            <h3 className='text-center text-4xl font-bold mb-4'>Uor Services</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    services.slice(0, 4).map(service => <ServiceCart
                        service={service}
                        key={service._id}
                    ></ServiceCart>)
                }
            </div>


            {/* <h3 className='text-center text-4xl font-bold mb-4'>Uor Services</h3> */}
            <div className='flex justify-center items-center mt-5'>
                <Link to="/services">
                    <button className="btn btn-primary text-center">Show All Services</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;