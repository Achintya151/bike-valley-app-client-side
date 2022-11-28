import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {


    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['Seller'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/users?role=Seller')
                const data = await res.json();
                console.log(data);
                return data;
            } catch (error) {

            }
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully made admin.')
                    refetch();
                }
            })
    }

    const handleDelete = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-start mb-4'>Sellers List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className='btn bg-blue-700'>Verify</button></td>
                                <td><button className='btn btn-success' onClick={() => handleMakeAdmin(user._id)}>Make Admin</button></td>
                                <td><button className='btn btn-error btn-circle btn-xs text-white font-bold' onClick={() => handleDelete(user)}>X</button></td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllSellers;