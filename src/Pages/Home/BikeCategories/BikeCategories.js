import React, { useEffect, useState } from 'react';
import BikeCategory from './BikeCategory';

const BikeCategories = () => {

    const [bikeCategories, setBikeCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikecategories')
            .then(res => res.json())
            .then(data => setBikeCategories(data))
    }, [])

    return (
        <div className='py-8'>
            <h2 className="text-4xl font-bold text-center pb-10">Categories</h2>
            <div className='grid grid-cols-3 gap-4 justify-items-center'>
                {
                    bikeCategories.map(bikeCategory => <BikeCategory
                        key={bikeCategory._id}
                        bikeCategory={bikeCategory}
                    ></BikeCategory>)
                }
            </div>
        </div>
    );
};

export default BikeCategories;