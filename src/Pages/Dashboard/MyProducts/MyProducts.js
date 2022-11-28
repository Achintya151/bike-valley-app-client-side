import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {


    const { data: bikes, isLoading } = useQuery({
        queryKey: ['bikes'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/bikes')
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-start mb-4'>My Products : {bikes.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sale status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        bikes.length === 0 ?
                            <tbody>
                                <h2 className='text-2xl font-semibold'>No data found</h2>
                            </tbody>
                            :
                            <tbody>

                                {
                                    bikes.map((bike, i) => <tr key={bike._id}>
                                        <th>{i + 1}</th>
                                        <td className=' capitalize'>{bike.name}</td>
                                        <td>{bike.resalePrice}</td>
                                        <td>{!bike.saleStatus && 'Available'}</td>
                                        <td><button className='btn btn-secondary'>Advertise</button></td>
                                        <td><button className='btn btn-error btn-circle btn-xs text-white font-bold'>X</button></td>
                                    </tr>)
                                }

                            </tbody>

                    }
                </table>
            </div>
        </div>
    );
};

export default MyProducts;