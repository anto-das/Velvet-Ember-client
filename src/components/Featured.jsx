import React from 'react'
import TitleBox from './TitleBox'
import featuredImg from '../assets/home/featured.jpg';
const Featured = () => {
  return (
    <div
    style={{backgroundImage:`url(${featuredImg})`}}
     className='lg:p-14 md:p-5 p-4 my-8 bg-cover bg-center bg-fixed inset-0 relative'>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='relative z-1'>
            <TitleBox
        title={'---Check it out---'}
        heading={'FROM OUR MENU'}
        ></TitleBox>
        <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center gap-5'>
            <div className='max-w-[330px]'>
                <img src={featuredImg} alt="" className='w-full'/>
            </div>
            <div className='text-white'>
               <h1> Aug 5,{new Date().getFullYear()}</h1>
               <p className='uppercase'>where can get i some?</p>
               <p>"You can find exclusive deals and coupons for Velvet Ember right here on our site. Just head to the brand’s page to view available offers!"</p>
               <button className='btn btn-outline border-0 uppercase border-b-4 '>Read More</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured