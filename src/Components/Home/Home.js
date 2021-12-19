import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Discount from '../Discount/Discount';
import Offers from '../Offers/Offers';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';
import ViewReviews from '../Reviews/ViewReviews/ViewReviews.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Discount></Discount>
            <ViewReviews></ViewReviews>
        </div>
    );
};

export default Home;