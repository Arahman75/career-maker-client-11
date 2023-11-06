import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/BCnVby1/banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Take a Good Care of Pets</h1>
                    <p className="mb-5">Welcome to our online store for pet care! We have a wide range of products and services to cater to all your furry friends' needs. Whether you have a dog, cat, bird, small animal, or even an exotic pet, we've got you covered. Here's a glimpse of what you can find in our store</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;