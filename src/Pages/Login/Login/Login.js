import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                const role = 'Buyer'
                saveUser(user?.displayName, user?.email, role)
            })
            .catch(e => console.error(e))
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                navigate('/')
            })
            .catch(e => console.error(e))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse w-1/2 mx-auto">
                <div className="text-center lg:text-left lg:pl-8">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className='py-4'>New to Bike valley? Please <Link className="link link-hover text-success font-semibold" to='/signup'>Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-success btn-wide text-white my-2">Google</button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;