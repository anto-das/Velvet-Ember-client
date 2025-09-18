
import { FaUtensils } from 'react-icons/fa';
import TitleBox from '../components/TitleBox';
import { useForm, } from "react-hook-form"
const AddItem = () => {
    const {handleSubmit,register} = useForm();
    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <div className=''>
           <TitleBox title={"---What's new?---"} heading={'ADD AN ITEM'}></TitleBox>
           <div className='max-w-4xl mx-auto p-5 lg:p-8 bg-[#e9e8e8]'>
             <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                {/* recipe name div */}
                <div className=''>
                       <label className='text-[#444444] font-semibold'>Recipe Name*</label>
                       <input 
                       type="text" 
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
                      defaultValue="category"
                       className="select border-none w-full mt-2">
                        <option defaultValue={true}>Category</option>
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
                 className="textarea mt-3 border-none w-full lg:h-[150px]"></textarea>
                </div>
                {/* photo div */}
                <div className=''>
                  <input {...register("image",{required:true})} type="file" className="file-input border-none my-2" />
                </div>
                <button className='btn mt-2 text-white shadow-none bg-linear-to-r from-[#835d23] to-[#b58130]'>
                  Add Item <FaUtensils/>
                </button>
    </form>
           </div>
        </div>
    );
};

export default AddItem;