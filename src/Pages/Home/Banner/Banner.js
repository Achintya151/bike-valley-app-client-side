import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://global.yamaha-motor.com/business/mc/img/index_key_001_sp.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">This is official website of Bike valley</h1>
                    <p className="my-10">We sale used motorcycle. You can post your old motorcycle for sale in our website. Choose your dream bike today.</p>
                    <button className="btn btn-success btn-wide">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;