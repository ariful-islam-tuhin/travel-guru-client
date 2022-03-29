import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='home-body'>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>

            
            
        </div>
    );
};

export default Home;