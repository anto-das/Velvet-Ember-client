import  { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthContext';
import signInImg from '../assets/others/authentication2.png'
import bgImg from '../assets/others/authentication.png'
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';
const SignUp = () => {
  const {signUp,updateUser} = useContext(AuthContext);
   const [isShowPassword,setIsShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data =>{
    const {name,email,password,photo} = data;
    signUp(email,password)
    .then(() =>{
      updateUser({displayName:name,photoURL:photo})
      // user info entry in the database
      .then(() =>{
        const userInfo = {
          name:name,
          email:email
        }
        axiosPublic.post('/users',userInfo)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            toast.success('sign up successfully')
          navigate( location.state ||'/')
          }
        })
      })
    })
    .catch(err => toast.error(err.message))
  }
    return (
     <div style={{backgroundImage:`url(${bgImg})`}} className="hero min-h-screen bg-cover bg-center inset-0">
       <div className="hero-content flex-col w-11/14 mx-auto lg:flex-row-reverse md:flex-row-reverse  shadow-2xl md:px-14 lg:px-16 py-20 ">
         <div className="max-w-md">
           <img src={signInImg} alt="" />
         </div>
         <div className="card w-full">
             <h1 className='text-center text-2xl font-bold'>Sign In</h1>
           <div className="card-body"> 
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* name field */}
                 <div>
                    <label className="label">Name</label>
                    <input type="text" {...register("name",{ required: true })} name='name' className="input w-full" placeholder="Name" />
                     {errors.name && <span className='text-red-500 '>Name is required</span>}
               </div>
                {/* photo field */}
                 <div>
                    <label className="label">Photo URL</label>
                    <input type="text" {...register("photo",{ required: true })} name='photo' className="input w-full" placeholder="Photo URL" />
                     {errors.photo && <span className='text-red-500 '>Photo url is required</span>}
               </div>
                {/* email field */}
               <div>
                    <label className="label">Email</label>
                    <input type="email" {...register("email",{ required: true })} name='email' className="input w-full" placeholder="Email" />
                     {errors.email && <span className='text-red-500'>Email is required</span>}
               </div>
               {/* password field */}
               <div className='relative'>
                 <label className="label">Password</label>
               <input 
               type={isShowPassword ? "text" :"password"}
                {...register("password",
                { required: true,
                  minLength:6,
                  maxLength:20,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/
                },
                )} name='password' className="input w-full" placeholder="Password" />
                {
                            isShowPassword ? <span onClick={() =>setIsShowPassword(!isShowPassword)} className='text-center z-1 text-lg absolute top-8 right-5'><FaEye /></span> : <span onClick={() =>setIsShowPassword(!isShowPassword)} className='text-center text-lg absolute z-1 top-8 right-5 '><FaEyeSlash /></span>
                          }
                {errors.password?.type ==='required' && <span className='text-red-500'>Password is required</span>}
                {errors.password?.type==='minLength' && <span className='text-red-500'>Password must be 6 characters</span>}
                {errors.password?.type==='maxLength' && <span className='text-red-500'>Password less then 20 characters</span>}
                {errors.password?.type==='pattern' && <span className='text-red-500'>Password must have one uppercase letter one lowercase letter one number and one special characters </span>}
               </div>
               <div className="form-control">
            <input className="btn w-full bg-[#d1a054] text-white mt-4" type="submit"  value={'Sign In'} />
          </div>
              <p className='w-full text-center text-[20px] capitalize text-[#cc7d05] '>Already Registered?  <Link to={'/sign-in'}><span className='font-bold hover:link'>go to sign in</span></Link> </p>
             </form>
               <p className='text-center text-lg text-gray-700 font-bold'>Or sign in with</p>
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
           </div>
         </div>
       </div>
     </div>
    );
};

export default SignUp;