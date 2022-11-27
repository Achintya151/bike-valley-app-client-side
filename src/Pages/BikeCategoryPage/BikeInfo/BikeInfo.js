import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

const BikeInfo = ({ bike, setBikeInfo }) => {

    const { name, img, category, originalPrice, resalePrice, location, postedTime, sellerName, yearsOfUse, sellerVerified
    } = bike;

    return (
        <div className="card card-side flex flex-row bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold capitalize">{name}</h2>
                <span><small>{postedTime}</small></span>
                <div className='grid grid-cols-3 items-center text-lg pb-8'>
                    <p><strong>Seller's Name:</strong></p>
                    <p>{sellerName}</p>
                    {
                        sellerVerified &&
                        <span className='text-blue-500'><HiBadgeCheck /></span>
                    }
                </div>

                <p className="text-lg font-bold text-center">Bike Info</p>
                <hr />
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Original Price:</strong> TK.{originalPrice}</p>
                <p><strong>Resale Price:</strong> TK.{resalePrice}</p>
                <p><strong>Years Of Use:</strong> {yearsOfUse} Years</p>


                <div className="card-actions justify-end py-4">
                    <label
                        onClick={() => setBikeInfo(bike)}
                        htmlFor="booking-modal" className="btn btn-success text-white">Book Now</label>
                </div>
            </div>
        </div >
    );
};

export default BikeInfo;