import React from 'react'
import Marquee from "react-fast-marquee";
import { TiShoppingCart } from "react-icons/ti";
import '../style/layout/maquee.css'



const Maquee = () => {

  const marqueeMessage = "YOU ORDER WE DELIVER"
  return (
    <div className='bg d-none' style={{backgroundColor:"#EA9962", color:"#F7E0CE"}}>
      <Marquee speed={100}>
        <div className='d-flex gap-5'>
        <div className='d-flex gap-3 align-items-center'>
          <TiShoppingCart className='marquee-cart-icon'/>
          <h1>{marqueeMessage}</h1>
        </div>
        <div className='d-flex gap-3 align-items-center'>
          <TiShoppingCart className='marquee-cart-icon'/>
          <h1>{marqueeMessage}</h1>
        </div>
        <div className='d-flex gap-3 align-items-center'>
          <TiShoppingCart className='marquee-cart-icon'/>
          <h1>{marqueeMessage}</h1>
        </div>
        <div className='d-flex gap-3 align-items-center'>
          <TiShoppingCart className='marquee-cart-icon'/>
          <h1>{marqueeMessage}</h1>
        </div>
        <div className='d-flex gap-3 align-items-center'>
          <TiShoppingCart className='marquee-cart-icon'/>
          <h1>{marqueeMessage}</h1>
        </div>
        <div className='d-flex gap-3 align-items-center'>
          <TiShoppingCart className='marquee-cart-icon'/>
          <h1>{marqueeMessage}</h1>
        </div>
        </div>
      </Marquee>
    </div>
  )
}

export default Maquee