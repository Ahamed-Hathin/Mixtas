import React, { useContext } from 'react'
import logo from '../../assets/images/homePage_img/logo-CreLghcd.png';
import { MyContext } from '../../context/ContextProvider';
import { Link, Route } from 'react-router-dom';

const Navbar = () => {
    const { cartItems, totalItem, toggleCart, searchText, handleSearch, searchResult } = useContext(MyContext)


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">

                    <div className="" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars menu-bar  " ></i>

                    </div>

                    <div className="navbar-brand ps-4">
                        <img src={logo} alt="" />
                    </div>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto gap-4" style={{ fontSize: "18px" }}>
                            <li className="nav-item" >
                                <Link to={'/'} className='nav-link text-dark' >Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/about'} className='nav-link text-dark'>About</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/shop'} className='nav-link text-dark'>Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/Faq'} className='nav-link text-dark'>Faq</Link>
                            </li>


                            <li className="nav-item">
                                <Link to={'/contact'} className='nav-link text-dark'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav gap-3">
                        <li className="nav-item ">
                            <i class="fa-regular fa-user fa-lg "></i>
                        </li>

                        <li className="nav-item">
                            <i class="fa-solid fa-magnifying-glass fa-lg " data-bs-toggle="offcanvas" data-bs-target="#searchCanvas" ></i>
                        </li>

                        <li className="nav-item d-none d-md-block d-lg-block">
                            <i class="fa-regular fa-heart fa-lg "></i>
                        </li>

                        <li className="nav-item">
                            <i class="fa-solid fa-cart-shopping fa-lg" data-bs-toggle="offcanvas" data-bs-target="#cartCanvas"></i>
                        </li>


                    </ul>
                </div>
            </nav>

            {/*             cart off canvas         */}

            <div class="offcanvas offcanvas-end" tabindex="-1" id="cartCanvas">
                <div className="offcanvas-header">
                    <h4 className='offcanvas-title'>Shopping Cart</h4>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <hr />
                    {
                        cartItems.length === 0 && <p>No Items Added</p>
                    }

                    {
                        cartItems.map((value, index) => (
                            <div className="row my-3" key={value.id} >
                                <div className="col-3">
                                    <img src={value.img} className='img-fluid' alt="" />
                                </div>

                                <div className="col-5 d-flex flex-column  align-items-center justify-content-center">
                                    <p className='mb-0'>{value.name}</p>
                                    <p>{value.price}</p>


                                </div>

                                <div className="col-4 d-flex align-items-center justify-content-end pe-5">
                                    <i class="fa-regular fa-circle-xmark fa-lg text-danger" onClick={() => toggleCart(value)}></i>
                                </div>

                            </div>



                        ))
                    }

                    <div className="postion-relative">
                        <div className="position-absolute bottom-0 w-100 p-3 border-top">
                            {
                                <h1>Total: ₹{totalItem}</h1>
                            }

                        </div>
                    </div>




                </div>
            </div>


            {/*                                Search Canvasss                                                     */}

            <div class="offcanvas offcanvas-top h-100" tabindex="-1" id="searchCanvas" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body ">
                    <div className="container search-container w-75">
                        <form>
                            <input
                                className='form-control border-0 border-bottom  shadow-none border-dark'
                                placeholder='Search Products...'
                                type="text"
                                value={searchText}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </form>

                        <div className="container my-5">
                            <div className="row ">



                                {
                                    searchResult.map((value, index) => (
                                        <div className="col-4" key={value.id}>
                                            <div className="card my-3">
                                                <img src={value.img} alt="" />
                                                <div className="card-body">
                                                    <p>{value.name}</p>
                                                    <p>{value.dec}</p>
                                                    <p>{value.price}</p>
                                                </div>
                                            </div>


                                        </div>
                                    ))
                                }


                            </div>
                        </div>



                    </div>

                </div>
            </div>






        </>
    )
}

export default Navbar