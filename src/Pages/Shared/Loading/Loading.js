import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="radial-progress animate-spin spinner-border text-success" style={{ "--value": 40 }} ></div>
        </div>
    );
};

export default Loading;