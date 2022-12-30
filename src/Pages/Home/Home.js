import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import InputTextField from './InputTextField';
import LoginPost from './LoginPost';

import Post from './Post';




const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className=''>
            {
                user?.email ?
                <InputTextField></InputTextField>
                :
                <LoginPost></LoginPost>
            }
            
            
            <Post></Post>
        </div>
    );
};

export default Home;