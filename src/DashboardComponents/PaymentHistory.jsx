
import TitleBox from "../components/TitleBox";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data:paymentHistory} = useQuery({
        queryKey:['payment-history'],
        queryFn: async() => {
            const res =await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <TitleBox 
            title={'---At a Glance!---'}
            heading={'payment history'}
            ></TitleBox>
            <div className="max-w-11/14 mx-auto my-8">
            <div className="overflow-x-auto">
                <h1 className="my-3 lg:text-3xl md:text-2xl text-2xl font-bold font-[Cinzel]">Total Payments: {paymentHistory?.length} </h1>
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054]">
      <tr>
        <th className="text-md uppercase text-white">Email</th>
        <th className="text-md uppercase text-white">Food-Name</th>
        <th className="text-md uppercase text-white">Amount</th>
        <th className="text-md uppercase text-white">Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        paymentHistory?.map((item) =>   <tr key={item._id}>
        <th>{item.email}</th>
        <td>{item.foodName}</td>
        <td>${item.price}</td>
        <td> {item.date} </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;