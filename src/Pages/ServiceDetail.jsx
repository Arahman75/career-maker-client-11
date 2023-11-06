import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            <h2>Service details:{service._id}</h2>
        </div>
    );
};

export default ServiceDetail;