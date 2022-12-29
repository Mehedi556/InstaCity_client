import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Loader from '../Pages/Loader/Loader';

const PrivetRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }


    if(user?.email){
        return children;
       }
       else{
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
       }
    
};

export default PrivetRoute;