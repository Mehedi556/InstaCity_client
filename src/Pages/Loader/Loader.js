import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
        <PropagateLoader color="#36d7b7" />
    </div>
    );
};

export default Loader;