import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['Buyer'],
        queryFn: async () => {
            try {
                const res = await fetch('https://bikevally-app-server.vercel.app/users?role=Buyer')
                const data = await res.json();
                return data;
            } catch (error) {

            }
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://bikevally-app-server.vercel.app/users/admin/${id}`, {
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
        fetch(`https://bikevally-app-server.vercel.app/users/${user._id}`, {
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
            <h2 className='text-4xl font-bold text-start mb-4'>Buyers List</h2>
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

export default AllBuyers;