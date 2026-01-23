import React, { useContext } from 'react'
import { Products } from '../assets/assets.js'
import Navbar from '../components/commonPageComponents/Navbar'
import { useParams } from 'react-router-dom'
import Related from '../components/commonPageComponents/Related.jsx'
import { MyContext } from '../context/ContextProvider.jsx'
import Footer from '../components/commonPageComponents/Footer.jsx'
const PRoducts = () => {
  
  
   const {id} = useParams()


  const product = Products.find((value) => value.id === parseInt(id))


  var suggest = Products.slice(0,4)

  
  const {  cartItems, toggleCart} = useContext(MyContext)
  const isInCart = cartItems.some(item => item.id === product.id)
  

  return (    
    <>
      <Navbar />
      <div className="container my-4 py-4">
        <div className="row py-5">
          <div className="col-12 col-md-12 col-lg-6 ">
            <img src={product.img} className='w-100 ' alt="" />

            <div className="row">
              {
                suggest.map((value)=>(
                <div className="col-3 mt-2">
                  <img src={value.img} className='w-100' alt="" />

                </div>
                ))
              }
            </div>


          </div>
          <div className="col-12 col-md-12 col-lg-6  pt-4 pt-lg-0">
            <h1>{product.dec}</h1>
            <p>{product.price}</p>
            <hr />
            <p>{product.para}</p>
            <button className='btn btn-dark mt-3 py-2 px-4' onClick={()=>toggleCart(product)}>
              { isInCart ? "Remove from Cart" : "Add To Cart"}
              </button>            
            </div>






        </div>
      </div>
     <Related/>
     <Footer/>
    </>

  )
}

export default PRoducts