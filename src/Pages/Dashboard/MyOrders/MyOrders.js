import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const email = user?.email;

    const { data: bikes = [] } = useQuery({
        queryKey: [email],
        queryFn: async () => {
            try {
                const res = await fetch(`https://bikevally-app-server.vercel.app/bookings?email=${email}`)
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    return (
        <div>
            <h2 className='text-4xl font-bold text-start mb-4'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bikes.map((bike, i) => <tr>
                                <th>{i + 1}</th>
                                <td className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={bike.img} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </td>
                                <td>{bike.itemName}</td>
                                <td>{bike.price}</td>
                                <td><button className='btn btn-success'>Pay Now</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;