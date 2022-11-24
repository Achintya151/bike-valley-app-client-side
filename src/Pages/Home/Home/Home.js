import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <ProductCategories></ProductCategories>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;