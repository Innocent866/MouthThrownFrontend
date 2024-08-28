import React from 'react'
import notFoundImage from "../assets/images/istockphoto-870198910-612x612.jpg"
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className=' d-flex justify-content-center align-iten-center vh-100' style={{backgroundColor:"#e5d1c4"}}>
      <div className='d-flex gap-3 flex-column justify-content-center align-items-center'>
        <img src={notFoundImage} alt="" width="50%"/>
        <h3 className='text-center'>
          This page is not available <Link to='/'>Continue Shopping </Link>
        </h3>
      </div>
    </div>
  )
}

export default Notfound