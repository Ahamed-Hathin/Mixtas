import React, { useContext } from 'react';
import logo from '../../assets/images/homePage_img/logo-CreLghcd.png';
import { MyContext } from '../../context/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const {
    cartItems,
    totalItem,
    toggleCart,
    searchText,
    handleSearch,
    searchResult
  } = useContext(MyContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">

          <div className="d-flex align-items-center gap-3">
            <div
              className="d-lg-none"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars menu-bar"></i>
            </div>

            <Link to="/home" className="navbar-brand m-0">
              <img src={logo} alt="logo" style={{ height: "40px", width: "auto" }} />
            </Link>

            {/* Mobile Only Search Icon next to Brand */}
            <div className="d-lg-none">
              <i
                className="fa-solid fa-magnifying-glass fa-lg"
                data-bs-toggle="offcanvas"
                data-bs-target="#searchCanvas"
              ></i>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-4" style={{ fontSize: "18px" }}>
              <li className="nav-item">
                <Link to="/home" className="nav-link text-dark">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-dark">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link text-dark">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link text-dark">Faq</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-dark">Contact</Link>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav flex-row gap-2 utility-icons align-items-center ms-auto">
            <li className="nav-item d-none d-lg-block">
              <i className="fa-regular fa-user fa-lg"></i>
            </li>

            <li className="nav-item d-none d-lg-block">
              <i
                className="fa-solid fa-magnifying-glass fa-lg"
                data-bs-toggle="offcanvas"
                data-bs-target="#searchCanvas"
              ></i>
            </li>

            <li className="nav-item d-none d-lg-block">
              <i
                className="fa-solid fa-bag-shopping fa-lg"
                data-bs-toggle="offcanvas"
                data-bs-target="#cartCanvas"
              ></i>
            </li>
          </ul>
        </div>
      </nav>

      {/* ================= CART OFFCANVAS ================= */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartCanvas">
        <div className="offcanvas-header">
          <h4 className="offcanvas-title">Shopping Cart</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        {/* 🔥 FIXED CART BODY */}
        <div className="offcanvas-body d-flex flex-column">

          {/* CART ITEMS (SCROLLABLE) */}
          <div className="flex-grow-1 overflow-auto">
            <hr />

            {cartItems.length === 0 && <p>No Items Added</p>}

            {cartItems.map((value) => (
              <div className="row my-3" key={value.id}>
                <div className="col-3">
                  <img src={value.img} className="img-fluid" alt="" />
                </div>

                <div className="col-5 d-flex flex-column justify-content-center">
                  <p className="mb-0">{value.name}</p>
                  <p>{value.price}</p>
                </div>

                <div className="col-4 d-flex align-items-center justify-content-end pe-4">
                  <i
                    className="fa-regular fa-circle-xmark fa-lg text-danger"
                    onClick={() => toggleCart(value)}
                  ></i>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL (STAYS AT BOTTOM) */}
          <div className="border-top p-3">
            <h5 className="mb-0">Total: ₹{totalItem}</h5>
          </div>
        </div>
      </div>

      {/* ================= SEARCH OFFCANVAS ================= */}
      <div className="offcanvas offcanvas-top h-100" tabIndex="-1" id="searchCanvas">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <div className="container search-container w-75">
            <form>
              <input
                className="form-control border-0 border-bottom shadow-none border-dark"
                placeholder="Search Products..."
                type="text"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </form>

            <div className="container my-5">
              <div className="row">
                {searchResult.map((value) => (
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
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
