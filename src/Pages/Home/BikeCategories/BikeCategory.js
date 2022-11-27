import React from 'react';
import { Link } from 'react-router-dom';

const BikeCategory = ({ bikeCategory }) => {
    const { img, category } = bikeCategory;

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body items-center justify-center">
                <h2 className="card-title text-6xl pb-2">{category}</h2>
                <div className="card-actions">
                    <Link className="btn btn-success" to={`/category/${category}`}>View category</Link>
                </div>
            </div>
        </div>
    );
};

export default BikeCategory;