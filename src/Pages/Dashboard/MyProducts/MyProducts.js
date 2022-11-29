import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const email = user?.email;

    const navigate = useNavigate();


    const { data: bikes, isLoading, refetch } = useQuery({
        queryKey: ['bikes', email],
        queryFn: async () => {
            try {
                const res = await fetch(`https://bikevally-app-server.vercel.app/bikesbyemail/${email}`)
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleAdvertise = bike => {
        fetch(`https://bikevally-app-server.vercel.app/bikes/advertised/${bike._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${bike.name} successfully added to Advertisement`)
                    refetch()
                    navigate('/')
                }
            })
    }

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
                                        <td><button className='btn btn-secondary' onClick={() => handleAdvertise(bike)} >Advertise</button></td>
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