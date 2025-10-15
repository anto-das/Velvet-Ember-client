
import { useState } from 'react';
import TitleBox from '../components/TitleBox';
import StarRating from './StarRating';
import { useForm } from 'react-hook-form';
import { IoIosSend } from "react-icons/io";
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddReview = () => {
    const [rating,setRating] = useState(0)
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data =>{
    const {recipe,suggestion,express} = data
    const review ={
        RecipeLiked:recipe,
        suggestion:suggestion,
        details:express,
        rating:rating,
        name:user?.displayName
    }
    axiosSecure.post('/review',review)
    .then(res =>{
        if(res?.data.insertedId){
            toast.success('Thank you for your feedback')
            navigate('/dashboard/user-home')
        }
    })
    .catch(err =>toast.error(err.message))
  }

    return (
        <div className='my-10'>
            <TitleBox title={'---Sharing is Caring!!!---'} heading={'GIVE A REVIEW...'}></TitleBox>
            <div className='max-w-11/14 mx-auto bg-[#f3f3f3] p-4 lg:p-10'>
         <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
             <h1 className='uppercase text-xl font-semibold text-center pb-2 font-[Cinzel]'>Rate Us!</h1>
         <StarRating 
         value={rating}
         onchange={setRating}
         ></StarRating>
            {/* recipe name field */}
                 <div>
                    <label className="label font-bold mb-4 text-gray-800">Which recipe you liked most?</label>
                    <input type="text" {...register("recipe",{ required: true })} name='recipe' className="input w-full border-none" placeholder="Recipe you liked most" />
                     {errors.recipe && <span className='text-red-500 '>Recipe name is required</span>}
               </div>
                {/* suggestion field */}
                 <div>
                    <label className="label font-bold mb-4 text-gray-800">Do you have any suggestion for us?</label>
                    <input type="text" {...register("suggestion",{ required: true })} name='suggestion' className="input w-full border-none" placeholder="Suggestions" />
                     {errors.suggestion && <span className='text-red-500 '>Photo url is required</span>}
               </div>
               {/* expression field*/}
               <div>
                <label className='label font-bold mb-4 text-gray-800'>Kindly express your care in a short way.</label> <br />
                <textarea 
                {...register("express",{required:true})}
                className="textarea w-full border-none" placeholder="Bio"></textarea>
               </div>
              <div>
                 <input 
               type="submit" 
               value={'Send Review'}
               className='btn btn-md text-white bg-gradient-to-l from-[#af8544] to-[#875f23]'
               id="" />
              </div>
         </form>
            </div>
        </div>
    );
};

export default AddReview;