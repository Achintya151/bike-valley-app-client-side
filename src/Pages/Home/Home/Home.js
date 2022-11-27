import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import BikeCategories from '../BikeCategories/BikeCategories';

const Home = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <BikeCategories></BikeCategories>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;