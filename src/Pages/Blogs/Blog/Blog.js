import React from 'react';

const Blog = ({ blogs }) => {
    const { question, answer } = blogs;
    return (
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                {question}
            </div>
            <div className="collapse-content">
                {
                    answer.map((singleAnswer, i) => <p className='pb-2'
                        key={i}
                    >{singleAnswer}</p>)
                }
            </div>
        </div>
    );
};

export default Blog;