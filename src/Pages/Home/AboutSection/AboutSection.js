import React from 'react';

const AboutSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://global.yamaha-motor.com/business/mc/img/index_key_005_sp.jpg" alt='motorcycle' className="max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About us</h1>
                    <p className="py-6">We are used motorcycle seller. We sell only highly quality used bike in reasonable price. You can post for you old bike to sale, we will test and collect them and list them in our website. Bike is not only a vehicle but also a emotion, dream and passion. Grab your bike today.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;