import React from 'react';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='p-4 bg-base-200 mt-12'>
            <footer className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                <aside>
                    <img src={logo} alt="logo" className='w-full h-36' />
                    <p className='text-2xl font-semibold pt-2 lg:text-start text-center'>Pet Sitting and Walking</p>
                </aside>
                <div className='text-center lg:text-start'>
                    <header className="footer-title">Services</header>
                    <Link className=' text-gray-800 font-medium '><p>Branding</p> </Link>
                    <Link className=' text-gray-800 font-medium '><p>Design</p> </Link>
                    <Link className=' text-gray-800 font-medium '><p>Marketing</p> </Link>
                    <Link className=' text-gray-800 font-medium '><p>Advertisement</p> </Link>
                </div>
                <div className='text-center lg:text-start'>
                    <header className="footer-title">Company</header>
                    <Link className=' text-gray-800 font-medium '><p>About us</p> </Link>
                    <Link className=' text-gray-800 font-medium '><p>Contact</p> </Link>
                    <Link className=' text-gray-800 font-medium '><p>Jobs</p> </Link>
                    <Link className=' text-gray-800 font-medium '><p>Press kit</p> </Link>
                </div>
                <div className='text-center lg:text-start'>
                    <header className="footer-title">Legal</header>
                    <Link className=' text-gray-800 font-medium '><p>Terms of use</p> </Link>
                    <Link className=' text-gray-800 font-medium '><p>Privacy policy</p> </Link>
                    <Link className=' text-gray-800 font-medium '><p>Cookie policy</p> </Link>
                </div>

            </footer>
            <p className='text-center'>All content reserved 2023 copy right by Abdur Rahman</p>
        </div>
    );
};

export default Footer;