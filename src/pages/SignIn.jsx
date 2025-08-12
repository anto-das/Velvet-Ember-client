
import signInImg from '../assets/others/authentication2.png'
import bgImg from '../assets/others/authentication.png'
const SignIn = () => {
    return (
        <div style={{backgroundImage:`url(${bgImg})`}} className="hero min-h-screen bg-cover bg-center inset-0">
  <div className="hero-content flex-col w-11/14 mx-auto lg:flex-row md:flex-row  shadow-2xl px-16 py-20 ">
    <div className="max-w-md">
      <img src={signInImg} alt="" />
    </div>
    <div className="card w-full max-w-sm">
        <h1 className='text-center text-2xl font-bold'>Sign In</h1>
      <div className="card-body"> 
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <input className="btn bg-[#d1a054] text-white mt-4" type="submit" name="" value={'Sign In'} id="" />
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;