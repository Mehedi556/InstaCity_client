import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = ({data}) => {
 const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const university = form.university.value;
  const address = form.address.value;
  console.log(name,email,address,university);
  // data='null';
 }

    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-5/12 mx-auto">
    <h3 className="font-bold text-lg text-center">Change your information</h3>
    <form className='w-full' onSubmit={handleSubmit}>
    <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full mb-3 mt-5" />
    <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full mb-3" defaultValue={data.email} readOnly/>
    <input name="university" type="text" placeholder="Your University" className="input input-bordered w-full mb-3" />
    <input name="address" type="text" placeholder="Your Address" className="input input-bordered w-full mb-3" />

    <div className="modal-action">
    <label htmlFor="my-modal" >
      <input htmlFor="my-modal" type="submit" value="save" className='btn'/>
      </label>
    </div>
    </form>
    {/* <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Save</label>
    </div> */}
  </div>
</div>
        </>
    );
};

export default Modal;