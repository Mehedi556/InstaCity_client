import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {

    const { register , handleSubmit ,  formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [error , setError] = useState('');
    const { signIn } = useContext(AuthContext);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        console.log(data)
        signIn(data.email , data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate(from, { replace : true });
      }).catch(error => {
        console.error(error)
        setError(error.message)
      })
    }


    return (
        <form style={{backgroundColor: "#ECF4E7"}} onSubmit={handleSubmit(handleLogin)} className='rounded-2xl mx-auto '>
        <div className="hero my-24 p-5 rounded-xl w-full">
  <div className="hero-content flex-col lg:flex-row">
  <div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold pb-5 text-center">Have An Account? Then</h1>
  <h1 className="text-3xl font-bold text-center">Login Now!</h1>
  
  
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
  
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your email</span>
      </label>
      <input {...register("email" , { required: "Email is required" } )} type="email" placeholder="email" className="input input-bordered" required/>
    </div>
  
  
  
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input {...register("password" , { required: "Password is required" , minLength: {value: 6, message: "Password must be 6 character or longer"} })} type="password"  placeholder="password" className="input input-bordered" required/>
      <label className="label">
        <Link to="/register"><p style={{color:"blue"}} href="#" className="label-text-alt link link-hover">Create an Account</p></Link>
      </label>
      <label className="label">
        <a  className="label-text-alt link link-hover">{error}</a>
      </label>
    </div>
  
  
  
    <div className="form-control mt-6">
      <button className="btn btn-primary text-black">Login</button>

    </div>
  </div>
  </div>
  </div>
  </div>
    </form>
    );
};

export default Login;