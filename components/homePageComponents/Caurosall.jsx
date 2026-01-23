import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  '../../index.css'
import carousel1 from '../../assets/images/homePage_img/carousel_img1-ByCyuLR7.png';
import carousel2 from '../../assets/images/homePage_img/carousel_img2-CSzVztVe.png'
import carousel3 from '../../assets/images/homePage_img/carousel_img3-mZ6JOGo_.png';
import { Link } from 'react-router-dom';


const Caurosall = () => {
  return (
    <>

<Swiper
      modules={[Pagination,Navigation,Autoplay]}
      // autoplay={{
      //   delay: 3000,           
      //   disableOnInteraction: false,
      // }}  
      loop={true}   
      speed={1000}    
      navigation={true}      
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>
         <div className="position-relative caurosel">
          <img src={carousel1} alt="" className='w-100 '/>
          <div className="slide-content position-absolute top-50 start-0 translate-middle-y ms-5 text-white">
            <h3 className='text-dark'>NEW ARRIVALS</h3>
            <h1 className='text-dark caurosel-text'>
              Style
              <br />
              Comfort For
              <br />
              Fall Nights              
              </h1>
              <Link to={'/shop'} className="slide-btn btn btn-dark">Shop Now</Link>
          </div>
        </div>
            </SwiperSlide>

            <SwiperSlide>
         <div className="position-relative caurosel">
          <img src={carousel2} alt="" className='w-100 '/>
          <div className="slide-content position-absolute top-50 start-0 translate-middle-y ms-5 text-white">
            <h3 className='text-dark'>NEW ARRIVALS</h3>
            <h1 className='text-dark  caurosel-text'>
              Style
              <br />
              Comfort For
              <br />
              Fall Nights              
              </h1>
              <Link to={'/shop'} className="slide-btn btn btn-dark">Shop Now</Link>
          </div>
        </div>
            </SwiperSlide>

            <SwiperSlide>
         <div className="position-relative caurosel">
          <img src={carousel3 } alt="" className='w-100 '/>
          <div className="slide-content position-absolute top-50 start-0 translate-middle-y ms-5 text-white">
            <h3 className='text-dark'>NEW ARRIVALS</h3>
            <h1 className='text-dark  caurosel-text'>
              Style
              <br />
              Comfort For
              <br />
              Fall Nights              
              </h1>
              <Link to={'/shop'} className="slide-btn btn btn-dark">Shop Now</Link>
          </div>
        </div>
            </SwiperSlide>






   
    
    </Swiper>



    
      
    </>
  )
}

export default Caurosall