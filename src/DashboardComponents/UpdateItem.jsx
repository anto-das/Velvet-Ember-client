
import { useLoaderData } from 'react-router-dom';
import TitleBox from '../components/TitleBox';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAxiosPublic from '../hooks/useAxiosPublic';


const hosting_image_key= import.meta.env.VITE_HOSTING_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${hosting_image_key}`;


const UpdateItem = () => {
    const {handleSubmit,register,reset} = useForm();
    const {name,category,price,recipe} = useLoaderData();
    const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure();

    const onSubmit = async data =>{
        const imgData ={image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imgData,{
          headers: {
        "content-type": "multipart/form-data",
      }
        })
       if(res.data.success){
        const menuItem = {
          name:data.name,
          category:data.category,
          price:parseFloat(data.price),
          recipe:data.recipe,
          image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menu',menuItem);
       if(menuRes.data.insertedId){
        reset();
        toast.success(`${data.name} is added to the menu`)
       }
       }
    }

    return (
        <div>
            <TitleBox title={"---What's new?---"} heading={'Update Item'}></TitleBox>
             <div className='max-w-4xl mx-auto p-5 lg:p-8 bg-[#e9e8e8]'>
                         <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                            {/*  name div */}
                            <div className=''>
                                   <label className='text-[#444444] font-semibold'>Recipe Name*</label>
                                   <input 
                                   type="text" 
                                   defaultValue={name}
                                   placeholder="Recipe Name" 
                                   className="input w-full focus:border-none border-none mt-2" 
                                   {...register("name",{required:true})}
                                   />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                               {/* category div */}
                            <div className=''>
                                  <legend className="fieldset-legend">Category*</legend>
                                  <select 
                                  {...register("category",{required:true})} 
                                  defaultValue={category}
                                   className="select border-none w-full mt-2">
                                    <option disabled defaultValue={true}>Category</option>
                                    <option value={'salad'}>Salad</option>
                                    <option value={'soup'}>Soup</option>
                                    <option value={'pizza'}>Pizza</option>
                                    <option value={'dessert'}>Dessert</option>
                                    <option value={'drink'}>Drink</option>
                                    <option value={'offered'}>Offered</option>
                                  </select>
                            </div>
                            {/* price div */}
                              <div className='mt-3'>
                                   <label className='text-[#444444] font-semibold'>Price*</label>
                                   <input 
                                   type="number" 
                                   placeholder="Price" 
                                   defaultValue={price}
                                   className="input w-full mt-2 focus:border-none border-none" 
                                   {...register("price",{required:true})}
                                   />
                            </div>
                            </div>
                            {/* recipe details */}
                            <div>
                              <label htmlFor="recipe" className=''>Recipe Details*</label>
                            <textarea 
                             {...register("recipe",{required:true})}
                             id='recipe'
                             placeholder="Recipe Details"
                             defaultValue={recipe}
                             className="textarea mt-3 border-none w-full lg:h-[150px]"></textarea>
                            </div>
                            {/* photo div */}
                            <div className=''>
                              <input 
                              {...register("image",{required:true})} type="file" 
                              className="file-input border-none my-2" />
                            </div>
                            <button className='btn mt-2 text-white shadow-none bg-linear-to-r from-[#835d23] to-[#b58130]'>
                               Update 
                            </button>
                </form>
                       </div>
        </div>
    );
};

export default UpdateItem;