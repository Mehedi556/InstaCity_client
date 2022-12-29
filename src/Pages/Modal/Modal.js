import React from 'react';

const Modal = ({data}) => {

    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-5/12 mx-auto">
    <h3 className="font-bold text-lg text-center">Change your information</h3>
    <form className='w-full '>
    <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full mb-3 mt-5" />
    <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full mb-3" defaultValue={data.email} readOnly/>
    <input name="university" type="text" placeholder="Your University" className="input input-bordered w-full mb-3" />
    <input name="address" type="text" placeholder="Your Address" className="input input-bordered w-full mb-3" />
    </form>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Save</label>
    </div>
  </div>
</div>
        </>
    );
};

export default Modal;