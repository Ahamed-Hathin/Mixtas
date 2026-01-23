import React from 'react'
import { Link } from 'react-router-dom'

const ErrorComponents = () => {
  return (
    <>
     <div className="text-center Error-Container my-5">
         <h1 className=''>Error 404</h1> 
      <h6 className='my-3'>Opps!</h6>
      <p className='mt-4'>The page you’re looking for isn’t available. Try to search again or<br/>
         use the go back button below.</p>
       <Link to={'/'} className='btn btn-dark mt-2 '>Back To Home</Link>     

     </div>

    </>
  )
}

export default ErrorComponents 