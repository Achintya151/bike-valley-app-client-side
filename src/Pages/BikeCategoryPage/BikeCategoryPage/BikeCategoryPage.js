import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeInfo from '../BikeInfo/BikeInfo';
import BookingModal from '../BookingModal/BookingModal';

const BikeCategoryPage = () => {

    const [bikeInfo, setBikeInfo] = useState(null);

    const bikes = useLoaderData();



    return (
        <div className='max-w-[1440px] mx-auto'>
            <h2 className="text-4xl uppercase font-bold py-8 text-center">All {bikes[0]?.category} bikes</h2>
            <div className='grid grid-cols-1 gap-4'>
                {
                    bikes.map(bike => <BikeInfo
                        key={bike._id}
                        bike={bike}
                        setBikeInfo={setBikeInfo}
                    ></BikeInfo>)
                }
                {
                    bikeInfo &&
                    <BookingModal
                        bikeInfo={bikeInfo}
                        setBikeInfo={setBikeInfo}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default BikeCategoryPage;