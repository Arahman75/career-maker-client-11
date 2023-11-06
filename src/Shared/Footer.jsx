import React from 'react';
import logo from '../assets/image/logo.png';

const Footer = () => {
    return (
        <div className='p-4 bg-base-200'>
            <footer className="footer text-base-content mt-12">

                <aside>
                    <img src={logo} alt="logo" className='w-full h-36' />
                    <p className='text-2xl font-semibold pt-2'>Pet Sitting and Walking</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <p className='text-center'>All content reserved 2023 copy right by Abdur Rahman</p>
        </div>
    );
};

export default Footer;