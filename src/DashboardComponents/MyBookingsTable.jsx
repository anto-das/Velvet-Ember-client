import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyBookingsTable = () => {
    const [cart,refetch] = useCart();
    const axiosSecure= useAxiosSecure();
    const handleDelete = id =>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axiosSecure.delete(`/carts/${id}`)
        .then(res =>{
            if(res.data.deletedCount > 0){
                refetch()
                console.log(res)
            Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
            }
        })
  }
});
    }
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054]">
      <tr >
        <th></th>
        <th className="text-white uppercase">Item Image</th>
        <th className="text-white uppercase">category</th>
        <th className="text-white uppercase">Price</th>
        <th className="text-white uppercase">Action</th>
        <th className="text-white uppercase"></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,indx) =><tr key={indx}>
        <td>{indx + 1}</td>
        <td>
          <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt={item.name} />
              </div>
        </td>
        <td>
          {item.category}
        </td>
        <td>{item.price}</td>
        <td><RiDeleteBin6Line onClick={() =>handleDelete(item._id)} className="text-red-500 text-2xl btn btn-xs"/></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default MyBookingsTable;