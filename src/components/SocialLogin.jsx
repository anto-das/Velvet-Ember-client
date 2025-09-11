import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='flex justify-center gap-8 md:gap-10 lg:gap-10'>
            <div className='border-2 border-[#444444] text-xl btn btn-circle'>
            <FaFacebookF  />
          </div>
          <div className='border-2 border-[#444444] text-xl btn btn-circle'>
            <FaGoogle />
          </div>
          <div className='border-2 border-[#444444] text-xl btn btn-circle'>
          <FaGithub />
          </div>
          </div>
    );
};

export default SocialLogin;