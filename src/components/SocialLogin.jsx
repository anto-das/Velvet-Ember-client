import { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthContext';
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const {signInWithGoogle} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(res =>{
      const userInfo = {
        email:res.user?.email,
        name:res.user?.displayName,
      }
      axiosPublic.post('/users',userInfo)
    .then(res =>{
      console.log(res.data)
      navigate('/')
      .catch(err => toast.error(err.message))
    })
    })
    .catch(err => toast.error(err.message))
  }

    return (
        <div className='flex justify-center gap-8 md:gap-10 lg:gap-10'>
            <div className='border-2 border-[#444444] text-xl btn btn-circle'>
            <FaFacebookF  />
          </div>
          <div onClick={handleGoogleSignIn} className='border-2 border-[#444444] text-xl btn btn-circle'>
            <FaGoogle />
          </div>
          <div className='border-2 border-[#444444] text-xl btn btn-circle'>
          <FaGithub />
          </div>
          </div>
    );
};

export default SocialLogin;