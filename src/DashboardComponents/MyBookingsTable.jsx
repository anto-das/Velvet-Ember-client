import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUtensils, FaTags, FaDollarSign, FaHashtag } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyBookingsTable = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f59e0b", // Velvet Ember Gold Theme Color
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      background: "#ffffff",
      customClass: {
        title: "text-slate-800 font-bold text-xl",
        popup: "rounded-2xl shadow-xl border border-slate-100",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been removed from bookings.",
              icon: "success",
              confirmButtonColor: "#f59e0b",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-slate-100 bg-white">
      <table className="table w-full border-collapse min-w-[600px]">
        {/* Adjusted Table Head to match Velvet Ember Theme */}
        <thead>
          <tr className="bg-[#0f0303] text-white uppercase tracking-wider text-xs border-none">
            <th className="py-4.5 px-6 font-extrabold text-left rounded-l-2xl">
              <span className="flex items-center gap-1">
                <FaHashtag className="text-amber-500" /> #
              </span>
            </th>
            <th className="py-4.5 px-6 font-extrabold text-left">
              <span className="flex items-center gap-1.5">
                <FaUtensils className="text-amber-500" /> Item Image
              </span>
            </th>
            <th className="py-4.5 px-6 font-extrabold text-left">
              <span className="flex items-center gap-1.5">
                <FaTags className="text-amber-500" /> Category
              </span>
            </th>
            <th className="py-4.5 px-6 font-extrabold text-left">
              <span className="flex items-center gap-1.5">
                <FaDollarSign className="text-amber-500" /> Price
              </span>
            </th>
            <th className="py-4.5 px-6 font-extrabold text-center rounded-r-2xl">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="text-sm font-medium text-slate-700 divide-y divide-slate-100">
          {cart.map((item, indx) => (
            <tr
              key={indx}
              className="hover:bg-slate-50/80 transition-all duration-300 group border-b border-slate-100"
            >
              {/* Index Column */}
              <td className="py-4 px-6 text-slate-400 font-bold">{indx + 1}</td>

              {/* Image / Avatar Column */}
              <td className="py-4 px-6">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12 ring-2 ring-slate-100 group-hover:ring-amber-500/20 shadow-sm transition duration-300 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name || "Food Item"}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </td>

              {/* Category Column */}
              <td className="py-4 px-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold capitalize bg-slate-100 text-slate-600 group-hover:bg-amber-500/10 group-hover:text-amber-600 transition-colors">
                  {item.category}
                </span>
              </td>

              {/* Price Column */}
              <td className="py-4 px-6 text-slate-900 font-black tracking-wide">
                ${item.price?.toFixed(2)}
              </td>

              {/* Action Delete Column */}
              <td className="py-4 px-6 text-center">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-circle btn-sm border-none bg-red-50 hover:bg-red-500 text-red-500 hover:text-white transition-all duration-300 transform active:scale-90 shadow-sm inline-flex items-center justify-center mx-auto"
                  title="Delete Item"
                >
                  <RiDeleteBin6Line className="text-base" />
                </button>
              </td>
            </tr>
          ))}

          {/* Empty State Handler */}
          {cart.length === 0 && (
            <tr>
              <td
                colSpan="5"
                className="text-center py-16 text-slate-400 font-semibold tracking-wide bg-slate-50/20"
              >
                Your booking bucket is empty.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingsTable;
