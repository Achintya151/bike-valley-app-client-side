import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useRole from '../../hooks/useRole';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import ReportedItems from '../../Pages/Dashboard/ReportedItems/ReportedItems';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboadLayout = () => {

    const { user } = useContext(AuthContext);

    const [role] = useRole(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            role === 'Seller' &&
                            <li><Link to='/dashboard/addproduct'>Add a product</Link></li>
                        }

                        {
                            role === 'Admin' &&
                            <>
                                <li><Link to='/dashboard/alladmin'>All Admin</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allsellers'>All sellers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboadLayout;