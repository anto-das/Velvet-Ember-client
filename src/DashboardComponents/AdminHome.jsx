import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { PiUsersFourFill } from "react-icons/pi";
import { SiCodechef } from "react-icons/si";
import { FaTruckMoving } from "react-icons/fa";
import Chart from "../components/Chart";
const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const {data} = useQuery({
        queryKey:['adminHome'],
        queryFn:async() =>{
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    return (
        <div className="max-w-11/12 mx-auto my-4">
            <h2 className="text-2xl font-bold font-[Cinzel] uppercase">Hi,hello welcome back</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 py-2 gap-4">
                <div className="bg-gradient-to-l from-[#e6a3fc] to-[#c143f7] flex justify-center items-center gap-4 py-5">
                <GiWallet className="text-4xl text-white"/>
                <div>
                <p className="text-3xl font-bold text-white">{data?.revenue}$</p>
                    <h1 className="text-2xl font-bold text-white">Revenue</h1>
                </div>
            </div>
                <div className="bg-gradient-to-l to-[#daad66] from-[#eccb94] flex justify-center items-center gap-4 py-5">
                <PiUsersFourFill className="text-4xl text-white"/>
                <div>
                <p className="text-3xl font-bold text-white">{data?.users}</p>
                    <h1 className="text-2xl font-bold text-white">Customers</h1>
                </div>
            </div>
                <div className="bg-gradient-to-l from-[#fe9bc2] to-[#fe568b] flex justify-center items-center gap-4 py-5">
                <SiCodechef className="text-4xl text-white"/>
                <div>
                <p className="text-3xl font-bold text-white">{data?.menuItems}</p>
                    <h1 className="text-2xl font-bold text-white">Products</h1>
                </div>
            </div>
                <div className="bg-gradient-to-l from-[#91d4ff] to-[#72b6ff] flex justify-center items-center gap-4 py-5">
                <FaTruckMoving className="text-4xl text-white"/>
                <div>
                <p className="text-3xl font-bold text-white">{data?.orders}</p>
                    <h1 className="text-2xl font-bold text-white">Orders</h1>
                </div>
            </div>
            </div>
            <Chart></Chart>
        </div>
    );
};

export default AdminHome;