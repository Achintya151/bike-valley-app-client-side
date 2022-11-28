import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);

    const [category_id, setCategory_id] = useState(null);

    const current = new Date();
    const time = current.toLocaleTimeString("en-US");

    const navigate = useNavigate();

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const condition = form.condition.value;
        const img = form.img.value;
        const mobileNumber = form.mobileNumber.value;
        const location = form.location.value;
        const description = form.description.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const yearOfUse = form.yearOfUse.value;
        const category = form.category.value;

        if (category === '100cc') {
            setCategory_id('01')
        }
        if (category === '125cc') {
            setCategory_id('02')
        }
        if (category === '150cc') {
            setCategory_id('03')
        }
        else {
            setCategory_id(null)
        }

        const product = {
            name,
            condition,
            img,
            mobileNumber,
            location,
            description,
            originalPrice,
            resalePrice,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            yearOfPurchase,
            yearOfUse,
            category,
            category_id,
            postedTime: time
        }

        console.log(product);

        fetch('http://localhost:5000/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${name} added Successfully`)
                    navigate('/dashboard/myproducts')
                }
                else {
                    toast.error(data.massage);
                }
            })
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-bold py-4'>Add Product Here</h2>

            <form onSubmit={handleAddProduct} className='grid grid-cols-2 gap-4'>
                <input required name='name' type="text" placeholder="Enter product name" className="input input-bordered w-full max-w-md" />
                <select name='category' className="select select-bordered w-full max-w-md" required>
                    <option disabled selected>Select category</option>
                    <option>100cc</option>
                    <option>125cc</option>
                    <option>150cc</option>
                </select>
                <select name='condition' className="select select-bordered w-full max-w-md col-span-2" required>
                    <option disabled selected>Select condition type</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
                <input required name='img' type="text" placeholder="Enter photo URL" className="input input-bordered w-full max-w-md col-span-2" />
                <input required name='mobileNumber' type="text" placeholder="Enter mobile number" className="input input-bordered w-full max-w-md" />
                <select name='location' className="select select-bordered w-full max-w-md" required>
                    <option disabled selected>Select location</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Mymensingh</option>
                    <option>Sylhet</option>
                    <option>Khulna</option>
                    <option>Borisal</option>
                    <option>Rajshahi</option>
                    <option>Rangpur</option>
                </select>
                <textarea name='description' className="textarea textarea-bordered col-span-2" placeholder="Enter product short description" required></textarea>
                <input required name='originalPrice' type="text" placeholder="Enter selling Price" className="input input-bordered w-full max-w-md" />
                <input required name='resalePrice' type="text" placeholder="Enter purchase price" className="input input-bordered w-full max-w-md" />
                <input required name='yearOfPurchase' type="text" placeholder="Enter Year of purchase" className="input input-bordered w-full max-w-md" />
                <input required name='yearOfUse' type="text" placeholder="Enter Year of use" className="input input-bordered w-full max-w-md" />
                <input className='btn btn-success w-full col-span-2 text-white my-2' type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default AddAProduct;