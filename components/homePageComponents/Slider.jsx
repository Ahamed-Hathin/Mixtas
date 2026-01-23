import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Scrollbar, A11y } from 'swiper/modules';
import { Products } from '../../assets/assets';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  '../../index.css'
import { Link } from 'react-router-dom';
const Slider = () => {
  const recomended = Products.filter(item => item.category==="recomended")
  return (
    <>
    <div className="container my-5 Recommended-Container">
           <h1 className='text-center my-5 fw-normal'>Recommended Products</h1>

       
     <Swiper
           modules={[Pagination,Navigation,Autoplay]}
           autoplay={{
             delay: 3000,           
             disableOnInteraction: false,
           }}
           loop={true}   
           speed={1000}    
           navigation={true}      
           spaceBetween={50}
           slidesPerView={1}


           
  breakpoints={{
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }}
         >
           
             {
              recomended.map((value, index)=>(
           <SwiperSlide className='Recommended-items'>
               <Link to={'/shop'} className='text-decoration-none text-dark'>
                <div key={index} className=''>
                  <img src={value.img} alt="" className='w-100'/>
                 <div className="d-flex align-items-center justify-content-between mt-3">
                   <p className='mt-2'>{value.name}</p>
                  <i class="bi bi-arrow-up-right "></i>
                 </div>
                </div>

                </Link>
            </SwiperSlide> 
              ))
             }
            
            

      </Swiper>

    </div>


    </>
  )
}

export default Slider