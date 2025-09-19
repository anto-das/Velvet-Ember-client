import { RiDeleteBin6Line } from "react-icons/ri";
import TitleBox from "../components/TitleBox";
import useMenu from "../hooks/useMenu";
import { FaEdit } from "react-icons/fa";


const ManageItem = () => {
    const [menu] = useMenu();
    const handleItemDelete =id =>{
        console.log(id)
    }
    return (
        <div>
            <TitleBox title={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}></TitleBox>
            <div className="max-w-4xl mx-auto p-8">
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Item Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        menu.map((item,index) =><tr key={item._id}>
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
        <td onClick={() => handleEditItem(user._id)}><FaEdit className=" text-[#D1A054] text-2xl text-center"/></td>
        <td onClick={() => handleItemDelete(item._id)}><RiDeleteBin6Line className="text-red-500 text-2xl"/></td>
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