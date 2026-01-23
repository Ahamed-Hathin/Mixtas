import React, { useContext } from 'react'
import { Products } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { MyContext } from '../../context/ContextProvider'

const New_Arrivals = () => {

  const { hoverIndex , setHoverIndex } = useContext(MyContext)

  return (
    <>
   <div className="container new-arrivals my-5">
     
    <div className="row">
      
      <p className='text-center text-secondary '>LATEST PRODUCTS</p>
      <h1 className='text-center pb-4'>New Arrivals</h1>
      
    {
     Products.filter(item => item.category === "newArrival").map((value, index)=>(
        <div className="col-12 col-md-6 col-lg-3 ">
        <Link to= {`/product/${value.id}`} className='text-decoration-none text-dark'>

          <div className="card border-0 arrival-card" >
            {/* key={index} onMouseOver={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex("")} */}

            <img src={hoverIndex ? value.hoverImg : value.img} className='card-img' alt="" />
            <div className="card-img-overlay d-flex flex-column pt-5 arrival-icon-container" >
              <div className="justify-content-end d-flex mb-3 ">
              <i class="fa-regular fa-heart fa-lg mb-3 arrival-icon"></i>
              </div>
              <div className="justify-content-end d-flex mb-3 ">
              <i class="fa-solid fa-magnifying-glass fa-lg mb-3 arrival-icon"></i>
              </div>
              <div className="justify-content-end d-flex mb-3 ">
              <i class="fa-solid fa-cart-shopping fa-lg mb-3 arrival-icon"></i>
              </div>
            </div>
            <div className="card-body ms-0 ps-0">
              <h6>{value.name}</h6>
              <p>{value.dec}</p>
              <p>{value.price}</p>
            </div>
          </div>
        </Link>

        </div>
        
        

        
      ))

    }
    </div>
   </div>
    
    
    
    </>
  )
}

export default New_Arrivals