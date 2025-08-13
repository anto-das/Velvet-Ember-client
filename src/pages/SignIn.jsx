
import signInImg from '../assets/others/authentication2.png'
import bgImg from '../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
const SignIn = () => {
  const [disabled,setDisabled] = useState(true)
  const captchaRef = useRef();
  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])
  const handleSubmit = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email , password)
  }
  const handleCaptcha = () =>{
    const value = captchaRef.current.value;
    if(validateCaptcha(value)){
      setDisabled(false)
    }
  }
    return (
        <div style={{backgroundImage:`url(${bgImg})`}} className="hero min-h-screen bg-cover bg-center inset-0">
  <div className="hero-content flex-col w-11/14 mx-auto lg:flex-row md:flex-row  shadow-2xl md:px-14 lg:px-16 py-20 ">
    <div className="max-w-md">
      <img src={signInImg} alt="" />
    </div>
    <div className="card w-full">
        <h1 className='text-center text-2xl font-bold'>Sign In</h1>
      <div className="card-body"> 
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className=''>
               <label className="label">Email</label>
               <input type="email" name='email' className="input w-full" placeholder="Email" />
          </div>
          <div>
            <label className="label">Password</label>
          <input type="password" name='password' className="input w-full" placeholder="Password" />
          </div>
          <div>
            <LoadCanvasTemplate />
             <input type="text" ref={captchaRef} name='captcha' className="input w-full" placeholder="Type the catcha above" />
             <button onClick={handleCaptcha} className='btn hover:bg-[#d1a054] border-[#d1a054] hover:text-white btn-outline btn-xs mt-2 w-full'>Validate</button>
          </div>
          <div className="form-control">
            <input disabled={disabled} className="btn w-full bg-[#d1a054] text-white mt-4" type="submit"  value={'Sign In'} />
          </div>
          <p className='w-full text-center text-[20px] capitalize text-[#cc7d05] hover:link'>new here?<span className='font-bold'> create a new account</span></p>
        </form>
          <p className='text-center text-lg text-gray-700 font-bold'>Or sign in with</p>
          <div className='flex justify-center gap-10'>
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
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;