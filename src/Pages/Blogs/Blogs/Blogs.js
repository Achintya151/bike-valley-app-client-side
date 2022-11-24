import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='w-3/4 mx-auto'>
            <h2 className='text-4xl text-center text-gray-700 font-bold py-12'>Blogs</h2>
            <div className='pb-12'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blogs={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;