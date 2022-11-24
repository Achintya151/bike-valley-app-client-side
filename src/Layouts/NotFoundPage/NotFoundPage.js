import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/008/568/879/non_2x/website-page-not-found-error-404-robot-character-with-magnifying-glass-in-hand-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-eps-vector.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Can not find the page</h1>
                    <button className="btn btn-secondary"><Link to='/'>Please go back to home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;