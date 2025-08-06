
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from '../components/Slide'
import img1 from '../assets/home/01.jpg'
import img2 from '../assets/home/02.jpg'
import img3 from '../assets/home/03.png'
import img4 from '../assets/home/04.jpg'
import img5 from '../assets/home/05.png'
import img6 from '../assets/home/06.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Banner = () => {
  return (
    <Swiper 
    modules={[Autoplay,Pagination,Navigation]}
     spaceBetween={30}
     centeredSlides={true}
     loop={true}
     pagination={{
      clickable:true,
     }}
     autoplay={{
      delay:4000,
      disableOnInteraction:false
     }}
     navigation={true}
    className='mySwiper'
    >
      <SwiperSlide>
        <Slide img={img1}></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-1/2'>
            <Slide img={img2}></Slide>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={img3}></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={img4}></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={img5}></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={img6}></Slide>
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner