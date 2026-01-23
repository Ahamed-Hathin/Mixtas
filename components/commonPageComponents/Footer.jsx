import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer  p-1 ">
        <div className="container mt-5">
            <div className="row">
               
               
                <div className="col-12 col-md-6 col-lg-3 brand mb-5 mb-md-4 mb-lg-0">
                    <h1>Mixtas</h1>
                    <p>Whether you're a trendsetter, a minimalist, or an adventure at heart, Mixtas has something for everyone. Our diverse range of styles caters to various personas.</p>
                    <div className="footer-icons gap-3">
                           <i className='fa-brands fa-facebook  border text-center '></i>
                    <i className='fa-brands fa-x  border text-center'></i>
                    <i className='fa-brands fa-instagram  border text-center'></i>
                    <i className='fa-brands fa-pinterest  border text-center'></i>
                    </div>


                </div>




               <div className="col-12 col-md-6 col-lg-2 mb-5 mb-md-4 mb-lg-0">
                <h5>About Us</h5>
                <p>Our Story</p>
                <p>Mission & Values</p>
                <p>Meet the Team</p>
                <p>Sustainablility Efforts</p>
                <p>Brand Partnerships</p>
                <p>Influencer Collaborations</p>

               </div>


               <div className="col-12 col-md-6 col-lg-2 mb-5 mb-md-4 mb-lg-0">
                <h5>Accessibility</h5>
                <p>Accessibility Statement</p>
                <p>Site Map</p>
                <p>Web Accessibity Options</p>
                <p>ADA Compliance</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
               </div>



               
               <div className="col-12 col-md-6 col-lg-2 mb-5 mb-md-4 mb-lg-0">
                <h5>Join Our Community</h5>
                <p>VIP Membership</p>
                <p>Loyalty Program</p>
                <p>Customer Reviews</p>
                <p>Style Forums</p>
                <p>Job Openings</p>
                <p>Culture and Values</p>
               </div>


               <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0">
                <h5>Let's get in touch</h5>
                <p>Sign up for our newsletter and receive 10% off your</p>
                <input type="text" className='w-100 px-3 py-2'
                placeholder='Enter your email address'/>
               </div>






            </div>
        </div>
        <hr />

        <p className='text-center pt-3 pb-1 '>&copy; 2024 Mixtas All rights reserved. Developed By Ahamed Hathin</p>
      </div>
    
    </>
  )
}

export default Footer