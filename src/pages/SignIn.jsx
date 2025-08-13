
import signInImg from '../assets/others/authentication2.png'
import bgImg from '../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
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
  <div className="hero-content flex-col w-11/14 mx-auto lg:flex-row md:flex-row  shadow-2xl px-16 py-20 ">
    <div className="max-w-md">
      <img src={signInImg} alt="" />
    </div>
    <div className="card w-full max-w-sm">
        <h1 className='text-center text-2xl font-bold'>Sign In</h1>
      <div className="card-body"> 
        <form onSubmit={handleSubmit} className="fieldset">
          <div>
               <label className="label">Email</label>
               <input type="email" name='email' className="input" placeholder="Email" />
          </div>
          <div>
            <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          </div>
          <div>
            <LoadCanvasTemplate />
             <input type="text" ref={captchaRef} name='captcha' className="input" placeholder="Type the catcha above" />
             <button onClick={handleCaptcha} className='btn hover:bg-[#d1a054] border-[#d1a054] hover:text-white btn-outline btn-xs mt-2 w-full'>Validate</button>
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <div className="form-control">
            <input disabled={disabled} className="btn w-full bg-[#d1a054] text-white mt-4" type="submit"  value={'Sign In'} />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;