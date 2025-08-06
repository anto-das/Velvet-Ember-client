import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from '../components/Slide'
import img1 from '../assets/home/slide1.jpg'
import img2 from '../assets/home/slide2.jpg'
import img3 from '../assets/home/slide3.jpg'
import img4 from '../assets/home/slide4.jpg'
import img5 from '../assets/home/slide5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TitleBox from './TitleBox'
import IntroSection from './IntroSection'

const Category = () => {
  return (
    <div>
       <TitleBox 
        title={'---From 11:00am to 10:00pm---'}
         heading={'order online'}
         ></TitleBox>
        <Swiper 
    slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-8"
    >
      <SwiperSlide>
        <Slide img={img1} ></Slide>
        <p className='text-center text-xl uppercase text-white -mt-16'>Salads</p>
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={img2}></Slide>
        <p className='text-center text-xl uppercase text-white -mt-16'>soups</p>
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={img3}></Slide>
        <p className='text-center text-xl uppercase text-white -mt-16'>pizzas</p>
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={img4} ></Slide>
        <p className='text-center text-xl uppercase text-white -mt-16'>desserts</p>
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={img5} ></Slide>
      </SwiperSlide>
    </Swiper>
    <div className="py-8">
        <IntroSection></IntroSection>
      </div>
    </div>
  )
}

export default Category