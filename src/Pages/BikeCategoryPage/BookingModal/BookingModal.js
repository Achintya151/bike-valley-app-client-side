import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bikeInfo, setBikeInfo }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, resalePrice, img } = bikeInfo;

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            buyerName: name,
            email,
            itemName,
            itemId: _id,
            img,
            price,
            phoneNumber,
            meetingLocation
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBikeInfo(null)
                    toast.success('Booking Confirmed');
                } else {
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Book Your Bike Now!</h3>
                    <form onSubmit={handleBooking} >
                        <div>
                            <label className='label'>
                                Name :
                            </label>
                            <input name='name' type="text" value={user?.displayName} className="input input-bordered w-full max-w-md" disabled />
                        </div>
                        <div>
                            <label className='label'>
                                Email :
                            </label>
                            <input name='email' type="text" value={user?.email} className="input input-bordered w-full max-w-md" disabled />
                        </div>

                        <div>
                            <label className='label'>
                                Item Name :
                            </label>
                            <input name='itemName' type="text" value={name} className="input input-bordered w-full max-w-md capitalize" disabled />
                        </div>
                        <div>
                            <label className='label'>
                                Resale Price (tk.):
                            </label>
                            <input name='price' type="text" value={resalePrice} className="input input-bordered w-full max-w-md" disabled />
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                Phone number :
                            </label>
                            <input name='phoneNumber' type="number" placeholder='Enter Phone Number' className="input input-bordered w-full max-w-md" />
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                Meeting Location:
                            </label>
                            <input name='meetingLocation' type="text" placeholder='Enter Meeting Location' className="input input-bordered w-full max-w-md" />
                        </div>

                        <input className='w-full btn btn-accent my-4' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;