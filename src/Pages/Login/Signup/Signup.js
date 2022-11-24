import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Signup = () => {

    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(e => console.error(e))
    }

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUser(name, photoURL);
                navigate('/')
            })
            .catch(e => console.error(e))
    }

    const handleUpdateUser = (name, photoURL) => {
        const userInfo = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(userInfo)
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-10/12 mx-auto">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold pb-10">Sign Up now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
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
                        <button onClick={handleGoogleLogin} className="btn btn-success text-white my-2">Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;