import React from 'react'
import { Products } from '../../assets/assets';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Related = () => {
  const relatedProducts = Products.filter(item=> item.category ==="shop")
  return (
    <>
    
       <div className="container mb-5 popular-container">
        <h1 className='text-center mb-5'>Related Products</h1>


      <Swiper 

      modules={[Pagination,Autoplay,Navigation]}
      autoplay={{
        delay:3000,
        disableOnInteraction:false,
        }}
        
        loop={true}   
        speed={1000}    
        navigation={true} 
        
        breakpoints={{
          576:{
        slidesPerView:1,
         spaceBetween:20,
          },
        768:{
           slidesPerView:2,
         spaceBetween:30,
          
        },

        992:{
           slidesPerView:4,
         spaceBetween:30,
        }

        }}
   


      >
     
        {
          relatedProducts.map((value, index)=>(
            <SwiperSlide className='Recommended-items popular-items'>

              {/* <Link to={`/product/${value.id}`} className="text-decoration-none text-dark"> */}

              <div key={index}>
                <img src={value.img} className='w-100 img-card' alt="" />
                   <div className="card-img-overlay d-flex flex-column pt-4 pe-3 popular-icon-container" >

                 <div className="justify-content-end d-flex  ">
                    <i class="fa-regular fa-heart fa-lg mb-3 popular-icon"></i>
                  </div>
                  <div className="justify-content-end d-flex  ">
                    <i class="fa-solid fa-magnifying-glass fa-lg mb-3 popular-icon"></i>
                  </div>
                  <div className="justify-content-end d-flex  ">
                    <i class="fa-solid fa-cart-shopping fa-lg mb-3 popular-icon"></i>
                  </div>

                </div>  
                <p className='text-secondary'>{value.Pname}</p>
                <p>{value.dec}</p>
                <p className='text-secondary'>{value.price}</p>
              </div>

               {/* </Link> */}

            </SwiperSlide>



          ))


        }
        
        
         </Swiper>



        </div>
    </>
  )
}

export default Related