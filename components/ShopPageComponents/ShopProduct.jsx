import React from 'react'
import { Products } from '../../assets/assets.js'
import { Link } from 'react-router-dom'
import { MyContext } from '../../context/ContextProvider'

const ShopProduct = () => {
    const shop = Products.filter(item => item.category === "shop")

    return (

        <>

            <div className="container my-5 pt-5">
                <div className="row shop-container">
                    {
                        shop.map((value, index) => (
                            <div className="col-12 col-md-4 col-lg-3" key={value.id}>
                                <Link to={`/product/${value.id}`} className="text-decoration-none text-dark">
                                    <img src={value.img} alt="" className='w-100' />
                                    <h5 className='mt-3 text-secondary'>{value.name}</h5>
                                    <p>{value.dec}</p>
                                    <h6 className='text-secondary mb-4 pt-0 mt-0'>{value.price}</h6>
                                 </Link>   

                            </div>

                        ))
                    }

                </div>
            </div>





        </>
    )
}

export default ShopProduct