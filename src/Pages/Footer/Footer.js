import React from 'react';
import img from '../../Assets/logo.png'

const Footer = () => {
  return (
    <div className=''>
      <footer className="footer footer-center py-4 bg-base-300 text-base-content">
        <div>
            <img className='w-[40px]' src={img} alt="" />
          <p> All right reserved by InstaCity</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
