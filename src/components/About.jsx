import React from 'react';
import about from '../assets/about2.jpeg'

const About = () => {
    return (
        <div className='mt-12'>
            <div className='text-center mb-8'>
                <h3 className='text-4xl font-bold mb-2'>About Us</h3>
                <p className='text-lg text-black font-semibold'>We are your local dog home boarding <br /> service giving you complete</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div>
                    <img src={about} alt="about pic" className='rounded-lg h-96 w-full' />
                </div>
                <div className='p-4'>
                    <h3 className='text-4xl font-bold mb-4 text-center'>Welcome to The Pet <br /> Care Company</h3>
                    <div className='space-y-3'>
                        <p className='text-lg text-black font-semibold'>Companies are evaluated and ranked based on 3 main criteria: Financial capacity shown in the latest years financial statements,  Media credibility is assessed by Media Coding method encoding articles about the company on influential media channels.</p>
                        <p className='text-lg text-black font-semibold'>1 : Graceful goldfish, to small, cute kittens</p>
                        <p className='text-lg text-black font-semibold'>2 : Feeders are either veterinary qualified staf</p>
                        <p className='text-lg text-black font-semibold'>3 : Experienced pet owners and animal lovers</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;