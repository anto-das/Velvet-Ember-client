import { RiDeleteBin6Line } from "react-icons/ri";
import TitleBox from "../components/TitleBox";
import useMenu from "../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";

const ManageItem = () => {
    const queryClient = useQueryClient();
    const [items] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleItemDelete = item =>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then( (result) => {
  if (result.isConfirmed) {
    axiosSecure.delete(`/menu/${item._id}`)
     .then( res =>{
                if(res.data.deletedCount > 0){
                    queryClient.invalidateQueries(["menu"]);
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
        <div>
            <TitleBox title={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}></TitleBox>
            <div className="max-w-4xl mx-auto p-8">
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054]">
      <tr>
        <th></th>
        <th className="text-white">Item Image</th>
        <th className="text-white">Name</th>
        <th className="text-white">Price</th>
        <th className="text-white">Action</th>
        <th className="text-white">Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        items.map((item,index) =><tr key={item._id}>
        <th>
         {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt={item.name} />
              </div>
            </div>
          </div>
        </td>
        <td >
          {item.name}
        </td>
        <td>{item.price}</td>
        <td ><FaEdit className=" text-[#D1A054] text-2xl text-center"/></td>
        <td onClick={() => handleItemDelete(item)}><RiDeleteBin6Line className="text-red-500 text-2xl"/></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItem;