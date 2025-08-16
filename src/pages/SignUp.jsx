import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthContext';
import signInImg from '../assets/others/authentication2.png'
import bgImg from '../assets/others/authentication.png'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const SignUp = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = data =>{
    console.log(data)
  }

  //   const {signUp,updateUser} =useContext(AuthContext);
  //    const handleSubmit = e =>{
  //   e.preventDefault()
  //   const form = e.target;
  //   const name = form.name.value;
  //   console.log(name)
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   signUp(email,password)
  //   .then(()=>{
  //     updateUser({displayName:name})
  //   })
  //   .catch(err => console.log(err))
  // }
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
                {/* email field */}
               <div>
                    <label className="label">Email</label>
                    <input type="email" {...register("email",{ required: true })} name='email' className="input w-full" placeholder="Email" />
                     {errors.email && <span className='text-red-500'>Email is required</span>}
               </div>
               {/* password field */}
               <div>
                 <label className="label">Password</label>
               <input type="password" {...register("password",{ required: true })} name='password' className="input w-full" placeholder="Password" />
                {errors.password && <span className='text-red-500'>Password is required</span>}
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