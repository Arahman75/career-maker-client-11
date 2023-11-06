import React, { useEffect, useState } from 'react';

const Feature = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center mb-8'>
                <h3 className='text-4xl font-bold mb-2'>Our Feature</h3>
                <p className='text-lg text-black font-semibold'>We are your local dog home boarding <br /> service giving you complete</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    features.map(feature =>
                        <div className="card ">
                            <div className='flex items-center justify-center'>
                                <img src={feature.img} alt="Shoes" className="rounded-full h-64 w-64 text-center" />
                            </div>

                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl">{feature.name}</h2>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Feature;