import React from 'react';
import Banner from './Banner';
import HomeServices from './HomeServices';
import Feature from '../../components/Feature';

const Home = () => {
    return (
        <div className='mb-12'>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Feature></Feature>
        </div>
    );
};

export default Home;