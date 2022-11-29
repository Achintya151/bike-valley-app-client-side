import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import AboutSection from '../AboutSection/AboutSection';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import BikeCategories from '../BikeCategories/BikeCategories';

const Home = () => {

    const { data: bikes, isLoading } = useQuery({
        queryKey: ['bikes'],
        queryFn: async () => {
            const res = await fetch('https://bikevally-app-server.vercel.app/bikes/advertised');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner></Banner>
            {
                bikes.length > 0 &&
                <AdvertisedItem bikes={bikes}></AdvertisedItem>
            }
            <BikeCategories></BikeCategories>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;