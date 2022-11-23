import React from 'react';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboadLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
        </div>
    );
};

export default DashboadLayout;