import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['Admin'],
        queryFn: async () => {
            try {
                const res = await fetch('https://bikevally-app-server.vercel.app/users', {
                    headers: {
                        role: 'Admin'
                    }
                })
                const data = await res.json();
                return data;
            } catch (error) {

            }
        }
    })


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
            <h2 className='text-4xl font-bold text-start mb-4'>Admin List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>{user.role === 'Admin' && 'Admin'}</td>
                                <td><button className='btn btn-error btn-circle btn-xs text-white font-bold' onClick={() => handleDelete(user)}>X</button></td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllAdmin;