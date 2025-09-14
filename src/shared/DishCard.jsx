import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const DishCard = ({item}) => {
    const{name,recipe,image,_id,price,category}=item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [,refetch] =useCart();
    // send the cart item in DB
    const handleAddToCart = () =>{
      const cartDoc ={
        menuId:_id,
        email:user.email,
        name,
        image,
        price,
        category
      }
     if(user && user.email){
      axiosSecure.post('http://localhost:4000/carts',cartDoc)
      .then(res =>{
        if(res.data.acknowledged){
          toast.success(`${name} added to your cart`)
          refetch();
        }
      })
      .catch(err =>toast.error(err.message))
     }
     else{
      toast((t) =>{
        return(
           <div className="space-y-2">
          <p className="text-lg">Sorry, you're not signed in!</p>
<p className="text-sm text-center">Do you want to sign in?</p>
          <div className="flex justify-around items-center">
            <button onClick={() =>{
              toast.dismiss(t.id)
              navigate('/sign-in')
            }} className="btn btn-xs bg-blue-400 text-white">Yes</button>
            <button onClick={()=>toast.dismiss(t.id)} className="btn btn-xs bg-red-500">No</button>
          </div>
        </div>
        )
      })
     }
    }
  return (
    <div className="">
        <div className="bg-base-100 shadow-sm">
  <div className="">
    <img
      src={image}
      alt={name}
      className="w-full" />
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className='text-gray-500'>{recipe.substring(0, 80)}...</p>
    <div className="card-actions">
      <button onClick={handleAddToCart} className="btn text-[#BB8506] hover:text-[#ebb537] hover:border-none bg-[#E8E8E8] border border-b-[#BB8506] hover:bg-[#1F2937]">Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DishCard