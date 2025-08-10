import { useEffect, useState } from "react"
import TitleBox from "./TitleBox"
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { ImQuotesLeft } from "react-icons/im";
const Testimonials= () =>{
    const [reviews,setReviews] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/review')
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[])
    return(
        <section>
            <TitleBox
            title={'---What Our Clients Say---'}
            heading={'TESTIMONIALS'}
            ></TitleBox>
          <div>
                <Swiper
                 modules={[Navigation,Autoplay]}
                 navigation={true}
                 autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                 }}
                  className="mySwiper">
       
            {
                reviews.map(review =><SwiperSlide
                key={review._id}
                >
                    <div className=" flex flex-col items-center space-x-8">
                         <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                />
                                <p className="text-5xl my-2 text-gray-400"><ImQuotesLeft /></p>
                        <p className=" text-gray-700 my-2 text-center max-w-[600px] mx-auto">{review.details}</p>
                        <h1 className="text-amber-700 text-xl text-center">{review.name}</h1>
                    </div>
                </SwiperSlide>)
            }
      </Swiper>
          </div>
        </section>
    )
}
 export default Testimonials