import React from 'react';
import Banner from './Banner';
import HomeServices from './HomeServices';
import Feature from '../../components/Feature';
import About from '../../components/About';
import Counter from '../../components/Counter';

const Home = () => {
    return (
        <div className='mb-12'>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Feature></Feature>
            <About></About>
            <Counter></Counter>
        </div>
    );
};

export default Home;