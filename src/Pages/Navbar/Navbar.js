import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { AuthContext } from '../../Contexts/AuthProvider';


const Navbar = () => {

  const {user , logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
  }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to="/"><li><a>Home</a></li></Link>
      <Link to="/media"><li><a>Media</a></li></Link>
      <Link to="/about"><li><a>About</a></li></Link>
      </ul>
    </div>
    <div className='flex items-center'>
        <img className='w-[50px]' src={logo} alt="" />
        <a className=" normal-case text-xl font-bold font-">InstaCity</a>
    </div>
    
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to="/"><li><a>Home</a></li></Link>
      <Link to="/media"><li><a>Media</a></li></Link>
      <Link to="/about"><li><a>About</a></li></Link>
      {
        user?.uid ?
        <button onClick={handleLogOut}><li><a>Logout</a></li></button>
        :
        <Link to="/login"><li><a>Login</a></li></Link>
      }
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;