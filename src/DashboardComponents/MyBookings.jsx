
import { Link } from 'react-router-dom';
import TitleBox from '../components/TitleBox';
import useCart from '../hooks/useCart';
import MyBookingsTable from './MyBookingsTable';

const MyBookings = () => {
    const [cart]= useCart();
    const totalPrice = cart.reduce((total,item) => total+item.price,0)
    return (
        <div>
           <TitleBox 
           title={'---Excellent Ambience---'}
            heading={'MY BOOKINGS'}></TitleBox> 
            <div className='max-w-4xl mx-auto space-y-4 px-4 bg-white py-5'>
                <div className=' flex items-center justify-between'>
                    <p className='text-sm md:text-xl lg:text-2xl font-bold uppercase'> bookings: {cart.length} </p>
                    <p className='text-sm md:text-xl lg:text-2xl font-bold uppercase'> price: {totalPrice} </p>
                    {
                        cart.length ? <Link to={'/dashboard/reservation'}>
                            <button className="btn btn-sm bg-[#D1A054] text-white uppercase">pay</button>
                        </Link> : <button disabled className="btn btn-sm bg-[#D1A054] text-white uppercase">pay</button>
                    }
                </div>
                <div>
                   <MyBookingsTable></MyBookingsTable>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;