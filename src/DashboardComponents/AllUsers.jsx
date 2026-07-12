import { useQuery } from "@tanstack/react-query";
import TitleBox from "../components/TitleBox";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers, FaUserShield, FaHashtag, FaEnvelope, FaShieldAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/user");
      return data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/user/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${user.name} has been promoted to Admin successfully!`);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This profile configuration track will be purged permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d97706", // Velvet Ember Unified Amber Accent
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      background: "#ffffff",
      customClass: {
        popup: "rounded-xl shadow-md border border-slate-100 text-sm"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User profile has been wiped safely.",
              icon: "success",
              confirmButtonColor: "#d97706"
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-6 px-4 antialiased animate-[fadeIn_0.3s_ease-out]">
      {/* Title Section */}
      <TitleBox title={"---How many??---"} heading={"MANAGE ALL USERS"} />

      {/* Simple Modern White Card Wrapper */}
      <div className="mt-8 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        
        {/* Minimal Header Utility Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-[Cinzel]">User Registry</h3>
          <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
            {users.length} Total Profiles
          </span>
        </div>

        {/* Clean Responsive Table Canvas */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                <th className="py-4 px-6 w-16 text-center"><FaHashtag className="inline" /></th>
                <th className="py-4 px-6"><span className="flex items-center gap-1.5"><FaUsers className="text-slate-400 text-xs" /> Full Name</span></th>
                <th className="py-4 px-6"><span className="flex items-center gap-1.5"><FaEnvelope className="text-slate-400 text-[10px]" /> Email Address</span></th>
                <th className="py-4 px-6 w-44"><span className="flex items-center gap-1.5"><FaShieldAlt className="text-slate-400 text-[10px]" /> Access Level</span></th>
                <th className="py-4 px-6 w-24 text-center">Purge</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100 bg-white">
              {users.map((user, indx) => (
                <tr key={user._id} className="hover:bg-slate-50/50 transition-colors duration-150">
                  
                  {/* Row Counter Number */}
                  <td className="py-3.5 px-6 text-slate-400 text-center font-semibold text-xs">{indx + 1}</td>
                  
                  {/* Name Text Track */}
                  <td className="py-3.5 px-6 font-bold text-slate-800 tracking-tight">{user.name}</td>
                  
                  {/* Email Text Track */}
                  <td className="py-3.5 px-6 text-slate-500 text-xs font-semibold">{user.email}</td>
                  
                  {/* Conditional Role Component Interface Trigger Box */}
                  <td className="py-3.5 px-6">
                    {user.role === "admin" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/40">
                        <FaUserShield className="text-[11px]" /> admin
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider border border-slate-200 bg-white text-slate-600 hover:text-amber-600 hover:border-amber-500 hover:bg-amber-50/50 transition-all duration-200 active:scale-95 shadow-none"
                        title="Promote Profile to Administrator"
                      >
                        <FaUsers className="text-xs" />
                        <span>Make Admin</span>
                      </button>
                    )}
                  </td>
                  
                  {/* Purge Profile Row Execution Control Trigger Tag */}
                  <td className="py-3.5 px-6 text-center">
                    <button 
                      onClick={() => handleUserDelete(user._id)} 
                      className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                      title="Purge Profile"
                    >
                      <RiDeleteBin6Line className="text-base" />
                    </button>
                  </td>

                </tr>
              ))}

              {/* Empty Fallback State Intercept view */}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-16 text-slate-400 font-medium text-xs tracking-wide">
                    No verified customer profiles logged into the system cluster.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
