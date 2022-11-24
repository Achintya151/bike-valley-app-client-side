import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Images/logo.jpg';

const Navbar = () => {

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>

    return (
        <div className="navbar bg-base">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="btn btn-ghost normal-case">
                    <div className="avatar px-4">
                        <div className="w-8 mask mask-hexagon">
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    <Link className='text-3xl' to='/'>Bike Valley</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;