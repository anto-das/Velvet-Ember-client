
import { useState } from 'react';
import TitleBox from '../components/TitleBox';
import StarRating from './StarRating';
import { useForm } from 'react-hook-form';



const AddReview = () => {
    const [rating,setRating] = useState(0)
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
    return (
        <div>
            <TitleBox title={'---Sharing is Caring!!!---'} heading={'GIVE A REVIEW...'}></TitleBox>
            <div className='max-w-11/14 mx-auto bg-[#f3f3f3] p-6'>
         <form onSubmit={handleSubmit}>
             <h1 className='uppercase text-xl font-semibold text-center pb-2 font-[Cinzel]'>Rate Us!</h1>
         <StarRating 
         value={rating}
         onchange={setRating}
         ></StarRating>
            {/* name field */}
                 <div>
                    <label className="label">Name</label>
                    <input type="text" {...register("name",{ required: true })} name='name' className="input w-full" placeholder="Name" />
                     {errors.name && <span className='text-red-500 '>Name is required</span>}
               </div>
                {/* photo field */}
                 <div>
                    <label className="label">Photo URL</label>
                    <input type="text" {...register("photo",{ required: true })} name='photo' className="input w-full" placeholder="Photo URL" />
                     {errors.photo && <span className='text-red-500 '>Photo url is required</span>}
               </div>
         </form>
            </div>
        </div>
    );
};

export default AddReview;