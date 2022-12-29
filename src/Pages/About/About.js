import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../Loader/Loader';
import { AuthContext } from '../../Contexts/AuthProvider'
import Modal from '../Modal/Modal';

const About = () => {
    const {user} = useContext(AuthContext);
    const {data, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res => res.json())
    })
    console.log(data);
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center  text-center">
      <h1 className="text-5xl font-bold">User Information</h1>
    </div>


    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" readOnly  defaultValue={data?.name}/>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" readOnly defaultValue={data?.email}/>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">User university</span>
          </label>
          <input type="text" placeholder="University" className="input input-bordered" readOnly  defaultValue={data?.university}/>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">User address</span>
          </label>
          <input type="text" placeholder="Address" className="input input-bordered" readOnly  defaultValue={data?.address}/>
        </div>
        <div className="form-control mt-6">
          <label htmlFor="my-modal" className="btn">Edit</label>
        </div>
      </div>
    </div>
  </div>
</div>
<Modal data={data}></Modal>
        </div>
    );
};

export default About;