import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useRole from '../../../hooks/useRole';
import Loading from '../../Shared/Loading/Loading';
import MyOrders from '../MyOrders/MyOrders';
import MyProducts from '../MyProducts/MyProducts';
import ReportedItems from '../ReportedItems/ReportedItems';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [role, roleLoading] = useRole(user?.email);

    if (roleLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {
                role === 'Admin' &&
                <ReportedItems></ReportedItems>
            }
            {
                role === 'Buyer' &&
                <MyOrders></MyOrders>
            }
            {
                role === 'Seller' &&
                <MyProducts></MyProducts>
            }
        </div>
    );
};

export default Dashboard;