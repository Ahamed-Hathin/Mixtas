import React from 'react'
import abtImg from '../../assets/images/aboutPage_img/ab_image-Ddi4Pr6i.jpeg'
import { AboutImg } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css'


const AboutNav = () => {
    return (
        <>
            <div className="container">
                <ul className='d-flex list-unstyled justify-content-center align-items-center  about-nav-container pt-5 pb-2'>
                    <li className='fs'>About Mixtas</li>
                    <li>Our Story</li>
                    <li>Our Mission</li>
                    <li>Connect with Us</li>
                </ul>
                <hr />


                <div className=" about-story ">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <img src={abtImg} alt="" className='w-100' />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 ps-5 mt-5 pt-3">
                            <h1>Unveiling Your Unique Fashion Journey</h1>
                            <p className='mt-5 fs-5 text-secondary'>Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing – it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.</p>
                        </div>


                    </div>
                </div>


            </div>



              



            <div className="our-team text-center mt-5">
  <h1>Meet Our Team</h1>

  <Swiper
    modules={[Pagination, Autoplay, Navigation]}
    loop={false}
    navigation={true}
    speed={1000}
    spaceBetween={20}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    }}
  >
    {AboutImg.map((value, index) => (
      <SwiperSlide key={index} className=" container mt-4 mb-5 team-slide">
        <img src={value.img} className="w-100" alt="" />
        <h5 className="mt-3">{value.name}</h5>
        <p className="text-secondary">{value.position}</p>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


        </>
    )
}

export default AboutNav