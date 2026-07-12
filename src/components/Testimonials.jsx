import TitleBox from "./TitleBox";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { ImQuotesLeft } from "react-icons/im";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Testimonials = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/review');
            return data;
        }
    });

    return (
        <section className="w-full max-w-5xl mx-auto my-16 px-4 antialiased animate-[fadeIn_0.4s_ease-out]">
            {/* Dynamic System Section Headers */}
            <TitleBox
                title={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            />

            {/* Slider Workspace Context Track */}
            <div className="mt-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-12 shadow-[0_10px_35px_-15px_rgba(0,0,0,0.03)] relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
                    className="mySwiper custom-testimonials-swiper"
                >
                    {reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center text-center space-y-4 px-8 md:px-16 select-none">
                                
                                {/* Refined Decorative Star Rating Block Layer */}
                                <div className="transform scale-90 md:scale-100 transition-transform">
                                    <Rating
                                        style={{ maxWidth: 140 }}
                                        value={review.rating}
                                        readOnly
                                        itemStyles={{
                                            activeFillColor: '#f59e0b', // Dynamic Velvet Amber gold core value
                                            inactiveFillColor: '#e2e8f0'
                                        }}
                                    />
                                </div>

                                {/* Minimalist Modern Quotes Icon Mark */}
                                <div className="text-slate-200 text-3xl md:text-4xl pt-2">
                                    <ImQuotesLeft />
                                </div>

                                {/* Primary Review Body Paragraph Description Text */}
                                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto tracking-tight">
                                    "{review.details}"
                                </p>

                                {/* Client Label Name Identity Sub-heading */}
                                <div className="pt-2">
                                    <h4 className="text-amber-600 font-black text-sm tracking-widest uppercase font-[Cinzel]">
                                        {review.name}
                                    </h4>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">
                                        Verified Patron
                                    </span>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
