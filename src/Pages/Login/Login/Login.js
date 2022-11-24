import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse w-1/2 mx-auto">
                <div className="text-center lg:text-left lg:pl-8">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className='py-4'>New to Bike valley? Please <Link className="link link-hover text-success font-semibold" to='/signup'>Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-success btn-wide text-white my-2">Google</button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;