import React, { useContext } from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { AuthContext } from '../../../contexts/AuthProvider';
import useRole from '../../../hooks/useRole';
import useVerify from '../../../hooks/useVerify';
import Loading from '../../Shared/Loading/Loading';

const BikeInfo = ({ bike, setBikeInfo }) => {

    const { user } = useContext(AuthContext);
    const [role, roleLoading] = useRole(user?.email);

    const { name, img, category, originalPrice, resalePrice, location, postedTime, sellerName, sellerEmail, yearsOfUse, sellerVerified
    } = bike;

    const [isVerified, isVerifiedLoading] = useVerify(sellerEmail)

    console.log(isVerified.users?.sellerVerified);

    if (isVerifiedLoading || roleLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="card card-side grid grid-cols-5 bg-base-100 shadow-xl my-4">
            <figure className='col-span-3'><img src={img} alt="Movie" /></figure>
            <div className="card-body col-span-2">
                <h2 className="card-title text-4xl font-bold capitalize">{name}</h2>
                <span><small>{postedTime}</small></span>
                <div className='grid grid-cols-3 items-center text-lg pb-8'>
                    <p><strong>Seller's Name:</strong></p>
                    <p>{sellerName}</p>
                    {
                        isVerified.users?.sellerVerified &&
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
                    {
                        role === 'Buyer' &&
                        <label
                            onClick={() => setBikeInfo(bike)}
                            htmlFor="booking-modal" className="btn btn-success text-white">Book Now</label>
                    }
                </div>
            </div>
        </div >
    );
};

export default BikeInfo;