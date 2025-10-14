import React from 'react';
import TitleBox from '../components/TitleBox';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { MdPending } from 'react-icons/md';
import { FaCircleCheck } from 'react-icons/fa6';

const ManageBooking = () => {
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey:['manageBooking'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/payments')
            return res.data
        }
    })
    return (
        <div>
            <TitleBox title={'---At a Glance!---'} heading={'MANAGE ALL BOOKINGS'}></TitleBox>
            <div className="max-w-11/14 mx-auto">
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className='bg-[#D1A054]'>
      <tr>
        <th></th>
         <th className="text-md uppercase text-white">User Email</th>
        <th className="text-md uppercase text-white">Booking Date</th>
        <th className="text-md uppercase text-white">Activity</th>
        <th className="text-md uppercase text-white">Amount</th>
        <th className="text-md uppercase text-white">Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data?.map((item,index) =><tr key={item._id}>
        <th> {index +1} </th>
        <td> {item.email} </td>
        <td> {item.date} </td>
        <td> {item.status} </td>
        <td>{item.price}</td>
        {
            item.status === 'paid' ?   <td><FaCircleCheck className='text-3xl text-green-500' /></td> :<td className='text-3xl text-red-500'><MdPending /></td>
        }
      </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageBooking;