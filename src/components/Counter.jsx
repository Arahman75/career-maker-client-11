import React from 'react';
import counter1 from '../assets/counter1.png';
import counter2 from '../assets/counter2.png';
import counter3 from '../assets/counter3.png';
import counter4 from '../assets/counter4.png';

const Counter = () => {
    return (
        <div className='grid grid-cols-1 my-24 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div>
                <img src={counter1} alt="counter1" className='w-3/4 mx-auto' />
                <div className='text-center pt-2'>
                    <h2 className='font-extrabold text-5xl'>100<span className='text-red-600'>+</span></h2>
                    <h3 className='text-2xl font-bold text-gray-500'>Client Served</h3>
                </div>
            </div>
            <div>
                <img src={counter2} alt="counter2" className='w-3/4 mx-auto' />
                <div className='text-center pt-2'>
                    <h2 className='font-extrabold text-5xl'>99<span className='text-red-600'>%</span></h2>
                    <h3 className='text-2xl font-bold text-gray-500'>Pets Protection</h3>
                </div>
            </div>
            <div>
                <img src={counter3} alt="counter3" className='w-3/4 mx-auto' />
                <div className='text-center pt-2'>
                    <h2 className='font-extrabold text-5xl'>900<span className='text-red-600'>+</span></h2>
                    <h3 className='text-2xl font-bold text-gray-500'>Miles Walked</h3>
                </div>
            </div>
            <div>
                <img src={counter4} className='w-3/4 mx-auto' alt="counter4" />
                <div className='text-center pt-2'>
                    <h2 className='font-extrabold text-5xl'>400<span className='text-red-600'>+</span></h2>
                    <h3 className='text-2xl font-bold text-gray-500'>Served animals</h3>
                </div>
            </div>
        </div>
    );
};

export default Counter;