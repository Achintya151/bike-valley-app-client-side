import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-10/12 mx-auto">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold pb-10">Sign Up now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <span className='label-text'>Select your account type</span>
                            </label>
                            <select className="select select-bordered w-full max-w-sm">
                                <option selected>Buyer</option>
                                <option>Seller</option>
                            </select>
                            <label className='label'>
                                <span className='label-text'>Already have an account? Please <Link className="link link-hover text-success font-semibold" to='/login'>Login</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-success text-white">Sign Up</button>
                        </div>
                        <div className="divider">OR</div>
                        <button className="btn btn-success text-white my-2">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;