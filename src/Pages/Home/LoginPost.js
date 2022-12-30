import React from 'react';
import { Link } from 'react-router-dom';

const LoginPost = () => {
    return (
        <div className='my-10 rounded-md border p-4 mx-auto w-11/12 md:w-6/12 text-center'>
            <p className='font-bold text-xl'>Want to post something?<br />Please <Link to='/login'><button className='link link-success'>Login</button></Link></p>
        </div>
    );
};

export default LoginPost;