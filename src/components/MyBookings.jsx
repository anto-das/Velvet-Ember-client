import React from 'react';
import TitleBox from './TitleBox';
import DashboardTable from './DashboardTable';
import useCart from '../hooks/useCart';

const MyBookings = () => {
    const [cart]= useCart();
    const totalPrice = cart.reduce((total,item) => total+item.price,0)
    return (
        <div>
           <TitleBox 
           title={'---Excellent Ambience---'}
            heading={'MY BOOKINGS'}></TitleBox> 
            <div className='max-w-4xl mx-auto space-y-4'>
                <div className='md:flex lg:flex items-center justify-between'>
                    <p className='text-lg md:text-xl lg:text-2xl font-bold uppercase'>total boolings: {cart.length} </p>
                    <p className='text-lg md:text-xl lg:text-2xl font-bold uppercase'>total price: {totalPrice} </p>
                    <button className="btn btn-md bg-[#D1A054] text-white uppercase">pay</button>
                </div>
                <div>
                    <DashboardTable></DashboardTable>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;