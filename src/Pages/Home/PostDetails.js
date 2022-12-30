import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    
    return (
        <div className=''>
            <div className="card w-11/12 md:w-9/12 bg-base-100 shadow-xl mx-auto rounded-none border p-4 rounded-lg">
  <figure><img src={post.pic} alt="Shoes" /></figure>
  <div className="card-body">
    <p>{post.text}</p>
  </div>
  <div className="card-body">
    <p className='font-bold'>Post created by: <span className='text-xl'>{post.displayName}</span></p>
    <p className='font-bold'>Creators email: <span className='text-xl'>{post.email}</span></p>
  </div>
  <div>
    <label className='pl-6'>Add your comment</label>
  <input type="text" name="" id="" className='input input-sm input-bordered w-11/12 mx-auto'/>
  </div>
  
</div>
        </div>
    );
};

export default PostDetails;