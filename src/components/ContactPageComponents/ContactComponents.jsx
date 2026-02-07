import React from 'react'

const ContactComponents = () => {
    return (
        <>

            <div className="contact-conatiner my-5">
                <h1 className=' text-center'>Conatact Us</h1>

                <div className="container mt-4">
                    <div className="row">



                        <div className="col-12 col-md-6 col-lg-3  text-center contact-icon1">
                            <i class="fa-solid fa-location-dot fa-2xl border "></i>
                            <h6 className='pt-4 pb-2 fs-4 mt-1 '>Store Address</h6>
                            <p className='text-secondary'>PO Box 16122 Collins Street West Victoria <br />
                                8007 Australia</p>
                        </div>



                        <div className="col-12 col-md-6 col-lg-3 text-center contact-icon2">
                            <i class="fa-solid fa-phone fa-2xl"></i>
                            <h6 className='pt-4 pb-2 fs-4 mt-1 '>Call Info</h6>
                            <p className='text-secondary'>Open a chat or give us call at<br />
                                <span className='fw-bold'>+61 3 8376 6284</span></p>
                        </div>


                        <div className="col-12 col-md-6 col-lg-3 text-center contact-icon3">
                            <i class="fa-regular fa-envelope fa-2xl"></i>
                            <h6 className='pt-4 pb-2 fs-4 mt-1 '>Email Support</h6>
                            <p><span className='text-secondary'>Sent mail topp</span> <br />
                                support@mixtas.com </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 text-center contact-icon4">
                            <i class="fa-regular fa-message fa-2xl"></i>
                            <h6 className='pt-4 pb-2  fs-4 mt-1'>Live Support</h6>
                            <p><span className='text-secondary'>Live chat service</span> <br />
                                https://www.livechat.com
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container mt-5">

                    <div className="row">


                        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column contact-area">
                            <h1>Get In Touch</h1>
                            <input type="text" placeholder='Your Name' />
                            <input type="text" placeholder='Your Email' />
                            <input type="text" placeholder='Subject' />
                            <textarea name="text" placeholder='Your Message'></textarea>
                            <button className="btn btn-dark mt-5">Send Message</button>

                        </div>

                        <div className="col-12 col-md-6 col-lg-6 mt-5 pt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7348957229933!2d78.69215327480575!3d10.831588389320535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5b1102f81b3%3A0x88b9c5f1b91120c0!2sILIFE%20TECHNOLOGIES%20%7C%20Best%20Website%20Design%20Company%20in%20Trichy%20%7C%20Digital%20Marketing%20Company%20%7C%20Free%20Internship%20in%20Trichy!5e0!3m2!1sen!2sin!4v1763993497973!5m2!1sen!2sin"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>


                    </div>

                </div>



            </div>
        </>
    )
}

export default ContactComponents