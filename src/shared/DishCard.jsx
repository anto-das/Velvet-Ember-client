import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const DishCard = ({ item }) => {
  const { name, recipe, image, _id, price, category } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  // send the cart item in DB
  const handleAddToCart = (e) => {
    e.stopPropagation();
    const cartDoc = {
      menuId: _id,
      email: user.email,
      name,
      image,
      price,
      category,
    };
    if (user && user.email) {
      axiosSecure
        .post("/carts", cartDoc)
        .then((res) => {
          if (res.data.acknowledged) {
            toast.success(`${name} added to your cart`);
            refetch();
          }
        })
        .catch((err) => toast.error(err.message));
    } else {
      toast((t) => {
        return (
          <div className="space-y-2">
            <p className="text-lg">Sorry, you're not signed in!</p>
            <p className="text-sm text-center">Do you want to sign in?</p>
            <div className="flex justify-around items-center">
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  navigate("/sign-in");
                }}
                className="btn btn-xs bg-blue-400 text-white"
              >
                Yes
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="btn btn-xs bg-red-500"
              >
                No
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="cursor-pointer group transition-all duration-300 hover:-translate-y-1">
      <div className="bg-base-100 shadow-sm rounded-xl overflow-hidden border border-slate-100">
        <div className="w-full h-56 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="card-body items-center text-center p-5">
          <h2 className="card-title text-slate-800 group-hover:text-[#BB8506] transition-colors">
            {name}
          </h2>
          <p className="text-gray-500 text-sm">{recipe?.substring(0, 40)}...</p>
          <div className="card-actions mt-4">
            <button
              onClick={handleAddToCart} // 👈 ফিক্সড হ্যান্ডলার
              className="btn text-[#BB8506] hover:text-[#ebb537] hover:border-none bg-[#E8E8E8] border border-b-4 border-b-[#BB8506] hover:bg-[#1F2937] transition-all duration-200"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
