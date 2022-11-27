import React from 'react';

const AdvertisedItem = () => {
    return (
        <div>
            <h2 className='text-4xl'>Advertised Item</h2>
            <div className="flex justify-center items-center">
                <div className="radial-progress animate-spin spinner-border text-success" style={{ "--value": 40 }} ></div>
            </div>
        </div>
    );
};

export default AdvertisedItem;