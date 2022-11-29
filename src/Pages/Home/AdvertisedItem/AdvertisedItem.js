import React from 'react';
import BikeInfo from '../../BikeCategoryPage/BikeInfo/BikeInfo';

const AdvertisedItem = ({ bikes }) => {

    return (
        <div>
            <h2 className='text-4xl font-bold text-center py-8'>Advertised Item</h2>
            {
                bikes.map(bike => <BikeInfo key={bike._id}
                    bike={bike}></BikeInfo>)
            }
        </div>
    );
};

export default AdvertisedItem;