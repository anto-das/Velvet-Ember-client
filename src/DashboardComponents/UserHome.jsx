
import { GiWallet } from 'react-icons/gi';
import { IoMdStar } from "react-icons/io";
import { SiCodechef } from 'react-icons/si';
import { FaCartPlus, FaHome, } from 'react-icons/fa';
import useMenu from '../hooks/useMenu';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useCart from '../hooks/useCart';
import { MdMenuBook } from "react-icons/md";

const UserHome = () => {
   const [menu] = useMenu();
   const [cart] = useCart()
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data} = useQuery({
        queryKey:['payment-history'],
        queryFn: async() => {
            const res =await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div className='w-11/12 mx-auto my-8'>
              <h2 className="text-2xl font-bold font-[Cinzel] uppercase">Hi,hello welcome back</h2>
               <div className="grid grid-cols-1 lg:grid-cols-3 py-2 gap-4">
                {/* menu card */}
                              <div className="bg-gradient-to-l from-[#e6a3fc] to-[#c143f7] flex justify-center items-center gap-4 py-5">
                              <MdMenuBook className="text-4xl text-white"/>
                              <div>
                              <p className="text-3xl font-bold text-white">{menu?.length}</p>
                                  <h1 className="text-2xl font-bold text-white">Menu</h1>
                              </div>
                          </div>
                          {/* cart  */}
                              <div className="bg-gradient-to-l to-[#daad66] from-[#eccb94] flex justify-center items-center gap-4 py-5">
                              <FaHome className="text-4xl text-white"/>
                              <div>
                              <p className="text-3xl font-bold text-white">{cart?.length}</p>
                                  <h1 className="text-2xl font-bold text-white">Shop</h1>
                              </div>
                          </div>
                          {/* payments */}
                              <div className="bg-gradient-to-l from-[#fe9bc2] to-[#fe568b] flex justify-center items-center gap-4 py-5">
                              <SiCodechef className="text-4xl text-white"/>
                              <div>
                              <p className="text-3xl font-bold text-white">{data?.length}</p>
                                  <h1 className="text-2xl font-bold text-white">Payments</h1>
                              </div>
                          </div>
                          </div>
                          {/* activites */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 my-4">
                          <div className=' w-full bg-[#ffedd5] flex flex-col justify-center items-center p-10'>
                           <div  className='w-20 bg-white rounded-full'>
                             <img src={user?.photoURL}
                             alt={user?.displayName}
                             className='w-full rounded-full' 
                             />
                           </div>
                            <h4 className='text-xl mt-4 font-[Cinzel]'>{user?.displayName}</h4>
                          </div>
                          <div className=' w-full bg-[#fef9c3] flex flex-col justify-center items-center'>
                            <h1 className='text-3xl font-light font-[Cinzel]'>Your Activites</h1>
                           <p className='flex text-blue-500 items-center gap-1 text-xl font-semibold'> <FaCartPlus></FaCartPlus>  Activites: {cart?.length} </p>
                           <p className='flex text-[#00c4a1] items-center gap-1 text-xl font-semibold'> <IoMdStar className='text-2xl' /> Reviews: {cart?.length} </p>
                           <p className='flex text-red-400 items-center gap-1 text-xl font-semibold'> <GiWallet></GiWallet>  Payments: {data?.length} </p>
                          </div>
                          </div>
        </div>
    );
};

export default UserHome;