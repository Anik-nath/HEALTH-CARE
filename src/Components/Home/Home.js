import React from 'react';
import BestCare from '../BestCare/BestCare';
import Banner from "../Header/Banner/Banner";
import Welcome from './Welcome';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <BestCare></BestCare>
        </div>
    );
};

export default Home;