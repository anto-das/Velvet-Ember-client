import { useQuery } from "@tanstack/react-query";
import TitleBox from "../components/TitleBox";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data : users=[]} = useQuery({
        queryKey:['users'],
        queryFn:async () =>{
            const {data} = await axiosSecure.get('/users');
            return data
        }
    })
    return (
        <div >
            <TitleBox title={'---How many??---'} heading={'MANAGE ALL USERS'}></TitleBox>
            <div className="max-w-4xl mx-auto bg-white p-4">
                <h1 className="text-lg font-bold py-3 text-black uppercase font-[Cinzel]">total users:{users.length}</h1>
               <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054]">
      <tr>
        <th></th>
        <th className="text-white">Name</th>
        <th className="text-white">Email</th>
        <th className="text-white">Role</th>
        <th className="text-white">Action</th>
      </tr>
    </thead>
    <tbody className="py-3">
      {
        users.map((user,indx)=><tr key={user._id}>
        <th>{indx+1}</th>
        <td>{user.name}</td>
        <td> {user.email} </td>
        <td className="bg-[#D1A054] btn text-lg text-white"> <FaUsers className="text-center"/> </td>
        <td><RiDeleteBin6Line className="text-red-500 text-2xl btn btn-xs"/></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;